// src/components/Grid.tsx
import React, { useState, useEffect, useCallback } from "react";
import { aStar } from "../algorithms/AStar";
import {
  dijkstra,
  Grid as GridType,
  GridNode,
  UpdateGridFn,
} from "../algorithms/Dijkstra";
import { dfs } from "../algorithms/DFS";
import { bfs } from "../algorithms/BFS";

type Algorithm = "aStar" | "dijkstra" | "DFS" | "BFS";

interface GridProps {
  rows?: number;
  cols?: number;
}

const DEFAULT_ROWS = 20;
const DEFAULT_COLS = 40;

// Create a fresh node
const createNode = (row: number, col: number): GridNode => ({
  row,
  col,
  isStart: false,
  isEnd: false,
  isWall: false,
  distance: Infinity,
  isVisited: false,
  previousNode: null,
  isPath: false,
  status: undefined,
});

// Build an empty grid
const initializeGrid = (rows: number, cols: number): GridType => {
  const grid: GridType = [];
  for (let r = 0; r < rows; r++) {
    const row: GridNode[] = [];
    for (let c = 0; c < cols; c++) {
      row.push(createNode(r, c));
    }
    grid.push(row);
  }
  return grid;
};

export default function Grid({
  rows = DEFAULT_ROWS,
  cols = DEFAULT_COLS,
}: GridProps) {
  const [grid, setGrid] = useState<GridType>(() => initializeGrid(rows, cols));
  const [isDragging, setIsDragging] = useState(false);
  const [tool, setTool] = useState<"start" | "end" | "wall">("wall");
  const [algorithm, setAlgorithm] = useState<Algorithm>("aStar");
  const [cellSize, setCellSize] = useState(25);

  // Re-init grid if dimensions change
  useEffect(() => {
    setGrid(initializeGrid(rows, cols));
  }, [rows, cols]);

  // Responsive cell sizing
  const updateCellSize = useCallback(() => {
    const w = Math.min(window.innerWidth / cols, 25);
    const h = Math.min(window.innerHeight / rows, 25);
    setCellSize(Math.min(w, h));
  }, [cols, rows]);

  useEffect(() => {
    updateCellSize();
    window.addEventListener("resize", updateCellSize);
    return () => window.removeEventListener("resize", updateCellSize);
  }, [updateCellSize]);

  // Stop drag
  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Toggle start/end/wall
  const applyTool = (r: number, c: number) => {
    setGrid((prev) =>
      prev.map((row, ri) =>
        row.map((cell, ci) => {
          if (ri === r && ci === c) {
            if (tool === "start") {
              return {
                ...cell,
                isStart: !cell.isStart,
                isEnd: false,
                isWall: false,
              };
            }
            if (tool === "end") {
              return {
                ...cell,
                isEnd: !cell.isEnd,
                isStart: false,
                isWall: false,
              };
            }
            // wall
            return {
              ...cell,
              isWall: !cell.isWall,
              isStart: false,
              isEnd: false,
            };
          }
          return cell;
        })
      )
    );
  };

  const handleMouseDown = (r: number, c: number) => {
    applyTool(r, c);
    setIsDragging(true);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseEnter = (r: number, c: number) => {
    if (isDragging) applyTool(r, c);
  };

  // Reset only the search markings
  const clearPath = () => {
    setGrid((prev) =>
      prev.map((row) =>
        row.map((cell) => ({
          ...cell,
          isVisited: false,
          distance: Infinity,
          previousNode: null,
          isPath: false,
          status: undefined,
        }))
      )
    );
  };

  // Wipe everything
  const clearGrid = () => {
    setGrid(initializeGrid(rows, cols));
  };

  // Highlight final path
  const highlightPath = (path: GridNode[]) => {
    setGrid((prev) =>
      prev.map((row) =>
        row.map((cell) =>
          path.some((p) => p.row === cell.row && p.col === cell.col)
            ? { ...cell, isPath: true }
            : cell
        )
      )
    );
  };

  // Animate algorithm steps
  const updateGridVisuals: UpdateGridFn = (_g, node, status) => {
    setGrid((prev) =>
      prev.map((row) =>
        row.map((cell) =>
          cell.row === node.row && cell.col === node.col
            ? { ...cell, status, distance: node.distance }
            : cell
        )
      )
    );
  };

  // Run selected algorithm
  const findPath = async () => {
    const flat = grid.flat();
    const start = flat.find((n) => n.isStart);
    const end = flat.find((n) => n.isEnd);
    if (!start || !end) return;

    clearPath();
    let path: GridNode[] = [];

    switch (algorithm) {
      case "dijkstra":
        path = await dijkstra(grid, start, end, updateGridVisuals);
        break;
      case "DFS":
        path = await dfs(grid, start, end, updateGridVisuals);
        break;
      case "BFS":
        path = await bfs(grid, start, end, updateGridVisuals);
        break;
      default:
        path = await aStar(grid, start, end, updateGridVisuals);
    }

    highlightPath(path);
  };

  // Maze generator (randomized Prim's)
  const generateMaze = useCallback(() => {
    let maze = initializeGrid(rows, cols).map((row) =>
      row.map((cell) => ({ ...cell, isWall: true }))
    );

    const startR = Math.floor(Math.random() * rows);
    const startC = Math.floor(Math.random() * cols);
    maze[startR][startC].isWall = false;

    function frontiers(r: number, c: number) {
      const fts: {
        row: number;
        col: number;
        via: { row: number; col: number };
      }[] = [];
      [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ].forEach(([dr, dc]) => {
        const nr = r + dr * 2,
          nc = c + dc * 2;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          maze[nr][nc].isWall
        ) {
          fts.push({ row: nr, col: nc, via: { row: r + dr, col: c + dc } });
        }
      });
      return fts;
    }

    let fts = frontiers(startR, startC);
    while (fts.length) {
      const idx = Math.floor(Math.random() * fts.length);
      const f = fts.splice(idx, 1)[0];
      if (maze[f.row][f.col].isWall) {
        maze[f.row][f.col].isWall = false;
        maze[f.via.row][f.via.col].isWall = false;
        fts = fts.concat(frontiers(f.row, f.col));
      }
    }

    setGrid(maze);
  }, [rows, cols]);

  // Color logic for cells
  function determineBackgroundColor(node: GridNode): string {
    if (node.isStart) return "green";
    if (node.isEnd) return "red";
    if (node.isWall) return "black";
    if (node.isPath) return "orange";
    if (node.status === "open" || node.status === "current") {
      const lightness = 15 + 70 * (node.distance / 60);
      return `hsl(200,100%,${Math.min(lightness, 90)}%)`;
    }
    return "white";
  }

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800 transition-colors">
      {/* Controls */}
      <div className="container mx-auto max-w-5xl px-6">
        <div className="bg-white dark:bg-gray-700 rounded-3xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Pathfinding Demo
          </h2>

          {/* Tool selectors */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {/* Start */}
            <button
              onClick={() => setTool("start")}
              className={`px-4 py-2 rounded-full font-medium transition cursor-pointer ${
                tool === "start"
                  ? "bg-green-500 text-white"
                  : "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
              }`}
            >
              Start
            </button>

            {/* End */}
            <button
              onClick={() => setTool("end")}
              className={`px-4 py-2 rounded-full font-medium transition cursor-pointer ${
                tool === "end"
                  ? "bg-red-500 text-white"
                  : "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
            >
              End
            </button>

            {/* Wall */}
            <button
              onClick={() => setTool("wall")}
              className={`px-4 py-2 rounded-full font-medium transition cursor-pointer ${
                tool === "wall"
                  ? "bg-gray-500 text-white"
                  : "border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
              }`}
            >
              Wall
            </button>
          </div>

          {/* Algorithm + actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <select
              value={algorithm}
              onChange={(e) => setAlgorithm(e.target.value as Algorithm)}
              className="px-4 py-2 rounded-full border border-black text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
            >
              <option value="aStar">A*</option>
              <option value="dijkstra">Dijkstra's</option>
              <option value="DFS">DFS</option>
              <option value="BFS">BFS</option>
            </select>

            <button
              onClick={findPath}
              className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition cursor-pointer"
            >
              Find Path
            </button>

            <button
              onClick={clearPath}
              className="px-4 py-2 rounded-full bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition cursor-pointer"
            >
              Clear Path
            </button>

            <button
              onClick={clearGrid}
              className="px-4 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition cursor-pointer"
            >
              Clear Grid
            </button>

            <button
              onClick={generateMaze}
              className="px-4 py-2 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition cursor-pointer"
            >
              Generate Maze
            </button>
          </div>
        </div>
      </div>

      {/* Grid Container */}
      <div className="container mx-auto max-w-5xl px-6 mt-8">
        {/* Hide scrollbars */}
        <style>{`
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="overflow-auto no-scrollbar">
          <div
            className="inline-block"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
              gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
            }}
          >
            {grid.flat().map((node) => (
              <div
                key={`${node.row}-${node.col}`}
                onMouseDown={() => handleMouseDown(node.row, node.col)}
                onMouseEnter={() => handleMouseEnter(node.row, node.col)}
                onMouseUp={handleMouseUp}
                className="border border-gray-300 dark:border-gray-600 cursor-pointer transition-colors"
                style={{
                  width: cellSize,
                  height: cellSize,
                  background: determineBackgroundColor(node),
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
