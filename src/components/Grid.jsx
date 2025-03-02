/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { aStar } from "../algorithms/AStar"; // Ensure the import path is correct and typo corrected.
import { dijkstra } from "../algorithms/Dijkstra";
import { dfs } from "../algorithms/DFS";
import { bfs } from "../algorithms/BFS";

// Creates a new node with default properties.
const createNode = (row, col) => ({
  row,
  col,
  isStart: false,
  isEnd: false,
  isWall: false,
  distance: Infinity,
  isVisited: false,
  previousNode: null,
  isPath: false, // This property is used to indicate if the node is part of the final path.
  status: undefined,
});

// Initializes the grid with the given number of rows and columns.
// Optionally, a starting node can be set by providing startRow and startCol.
const initializeGrid = (rows, cols, startRow, startCol) => {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      const node = createNode(row, col);
      if (row === startRow && col === startCol) {
        node.distance = 0;
        node.isStart = true;
      }
      currentRow.push(node);
    }
    grid.push(currentRow);
  }
  return grid;
};

const Grid = ({ rows = 20, cols = 40 }) => {
  const [grid, setGrid] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [tool, setTool] = useState("wall");
  const [algorithm, setAlgorithm] = useState("aStar");
  const [cellSize, setCellSize] = useState(25);

  // Handle algorithm selection change.
  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };

  // Initialize the grid when the component mounts or when rows/cols change.
  useEffect(() => {
    setGrid(initializeGrid(rows, cols));
  }, [rows, cols]);

  // Apply the current tool (start, end, or wall) on mouse down.
  const handleMouseDown = (row, col) => {
    applyTool(row, col);
    setIsDragging(true);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Apply the current tool on mouse enter when dragging.
  const handleMouseEnter = (row, col) => {
    if (isDragging) {
      applyTool(row, col);
    }
  };

  // End dragging.
  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Resets only the path-related properties of each cell.
  const clearPath = () => {
    setGrid(
      grid.map((row) =>
        row.map((cell) => ({
          ...cell,
          isEnd: false,
          isStart: false,
          isVisited: false,
          distance: Infinity,
          previousNode: null,
          isPath: false,
          status: undefined,
        }))
      )
    );
  };

  // Resets the entire grid to its initial state.
  const clearGrid = () => {
    setGrid(
      grid.map((row) =>
        row.map((cell) => ({
          ...cell,
          isVisited: false,
          distance: Infinity,
          previousNode: null,
          isPath: false,
          isWall: false,
          isStart: false,
          isEnd: false,
          status: undefined,
        }))
      )
    );
  };

  // Highlights the computed path by marking nodes along it.
  const highlightPath = (path) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) =>
        row.map((cell) => {
          // Check if the current cell is part of the computed path.
          const pathNode = path.find(
            (pNode) => pNode.row === cell.row && pNode.col === cell.col
          );
          if (pathNode) {
            return { ...cell, isPath: true, status: "path" };
          }
          return cell;
        })
      );
      return newGrid;
    });
  };

  // Finds the path using the selected algorithm and updates the grid visuals.
  const findPath = async () => {
    const startNode = grid.flat().find((node) => node.isStart);
    const endNode = grid.flat().find((node) => node.isEnd);
    if (startNode && endNode) {
      let path = [];
      if (algorithm === "aStar") {
        path = await aStar(grid, startNode, endNode, updateGridVisuals);
      } else if (algorithm === "dijkstra") {
        path = await dijkstra(grid, startNode, endNode, updateGridVisuals);
      } else if (algorithm === "DFS") {
        path = await dfs(grid, startNode, endNode, updateGridVisuals);
      } else if (algorithm === "BFS") {
        path = await bfs(grid, startNode, endNode, updateGridVisuals);
      }
      highlightPath(path);
    }
  };

  // Applies the selected tool to the specified cell.
  const applyTool = (row, col) => {
    const newGrid = grid.map((r, rowIndex) =>
      r.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          if (tool === "start") {
            if (cell.isStart) return { ...cell, isStart: false };
            const existingStartCell = grid.find((row) =>
              row.find((cell) => cell.isStart)
            );
            if (existingStartCell) return cell;
            return {
              ...cell,
              isStart: true,
              isEnd: false,
              isWall: false,
            };
          } else if (tool === "end") {
            if (cell.isEnd) return { ...cell, isEnd: false };
            const existingEndCell = grid.find((row) =>
              row.find((cell) => cell.isEnd)
            );
            if (existingEndCell) return cell;
            return {
              ...cell,
              isEnd: true,
              isStart: false,
              isWall: false,
            };
          } else if (tool === "wall") {
            return {
              ...cell,
              isWall: !cell.isWall,
              isStart: false,
              isEnd: false,
            };
          }
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };

  // Generates a maze using a randomized Prim's algorithm.
  const generateMaze = (grid, setGrid) => {
    // Set all cells as walls.
    let mazeGrid = grid.map((row) =>
      row.map((cell) => ({ ...cell, isWall: true }))
    );

    // Choose a random starting point.
    let startRow = Math.floor(Math.random() * grid.length);
    let startCol = Math.floor(Math.random() * grid[0].length);

    // Helper function to retrieve frontier cells.
    function getFrontiers(row, col) {
      let frontiers = [];
      [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ].forEach(([dx, dy]) => {
        let newRow = row + 2 * dx,
          newCol = col + 2 * dy;
        if (
          newRow >= 0 &&
          newRow < grid.length &&
          newCol >= 0 &&
          newCol < grid[0].length &&
          mazeGrid[newRow][newCol].isWall
        ) {
          frontiers.push({
            row: newRow,
            col: newCol,
            via: { row: row + dx, col: col + dy },
          });
        }
      });
      return frontiers;
    }

    // Carve out the starting cell.
    mazeGrid[startRow][startCol].isWall = false;
    let frontiers = getFrontiers(startRow, startCol);

    // Process and carve passages from frontier cells.
    while (frontiers.length > 0) {
      let frontierIndex = Math.floor(Math.random() * frontiers.length);
      let frontier = frontiers[frontierIndex];
      if (mazeGrid[frontier.row][frontier.col].isWall) {
        mazeGrid[frontier.row][frontier.col].isWall = false;
        mazeGrid[frontier.via.row][frontier.via.col].isWall = false;
        frontiers = frontiers.concat(getFrontiers(frontier.row, frontier.col));
      }
      frontiers.splice(frontierIndex, 1); // Remove the processed frontier.
    }

    // Update the grid state with the generated maze.
    setGrid(mazeGrid);
  };

  // Dynamically adjust cell size based on the viewport dimensions.
  const updateCellSize = useCallback(() => {
    const cellWidth = Math.min(window.innerWidth / cols, 25);
    const cellHeight = Math.min(window.innerHeight / rows, 25);
    setCellSize(Math.min(cellWidth, cellHeight));
  }, [cols, rows]);

  useEffect(() => {
    updateCellSize();
    window.addEventListener("resize", updateCellSize);
    return () => {
      window.removeEventListener("resize", updateCellSize);
    };
  }, [updateCellSize]);

  // Updates the visual state of a node in the grid.
  const updateGridVisuals = (grid, node, status) => {
    console.log(
      `Updating visuals for node at [${node.row},${node.col}] with new distance ${node.distance}`
    );
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) =>
        row.map((cell) => {
          if (cell.row === node.row && cell.col === node.col) {
            console.log(
              `Old distance: ${cell.distance}, New distance: ${node.distance}`
            );
            return { ...cell, status: status, distance: node.distance };
          }
          return cell;
        })
      );
      return newGrid;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center text-center my-16">
        <h2 className="text-2xl font-bold dark:text-white">Pathfinding Demo</h2>
      </div>
      <div className="dark:bg-gray-900 flex flex-wrap items-center justify-center space-x-2 p-4">
        <button
          onClick={() => setTool("start")}
          className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
        >
          Set Start
        </button>
        <button
          onClick={() => setTool("end")}
          className="bg-gray-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
        >
          Set End
        </button>
        <button
          onClick={() => setTool("wall")}
          className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out ${
            tool === "wall" ? "bg-gray-900" : ""
          }`}
        >
          Toggle Walls
        </button>
        <div className="relative inline-block text-left">
          <select
            value={algorithm}
            onChange={handleAlgorithmChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
          >
            <option value="aStar">A*</option>
            <option value="dijkstra">Dijkstra's</option>
            <option value="DFS">DFS</option>
            <option value="BFS">BFS</option>
          </select>
        </div>
        <button
          onClick={findPath}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
        >
          Find Path
        </button>
        <button
          onClick={clearPath}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
        >
          Clear Path
        </button>
        <button
          onClick={clearGrid}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
        >
          Clear Grid
        </button>
        <button
          onClick={() => generateMaze(grid, setGrid)}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
        >
          Generate Maze
        </button>
      </div>

      <div
        className="flex items-center justify-center"
        style={{
          height: "100vh", // Use the full viewport height.
          width: "100vw", // Use the full viewport width.
          overflow: "hidden", // Prevent scrolling.
        }}
      >
        <div
          style={{
            height: "80vh",
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {grid.map((row, rowIndex) => (
            <div className="bg-white" key={rowIndex} style={{ display: "flex" }}>
              {row.map((node) => (
                <div
                  key={`${node.row}-${node.col}`}
                  onMouseDown={() => handleMouseDown(node.row, node.col)}
                  onMouseEnter={() => handleMouseEnter(node.row, node.col)}
                  onMouseUp={handleMouseUp}
                  style={{
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                    border: "1px solid #ddd",
                    background: determineBackgroundColor(node),
                    cursor: "pointer",
                    boxSizing: "border-box",
                    lineHeight: "0",
                    margin: "0",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
};

export default Grid;

// Determines the background color of a node based on its state.
function determineBackgroundColor(node) {
  if (node.isStart) return "green"; // Start node.
  if (node.isEnd) return "red"; // End node.
  if (node.isWall) return "black"; // Wall.
  if (node.isPath) return "orange"; // Part of the final path.
  if (node.status === "open" || node.status === "current") {
    // Gradually adjust lightness based on node distance.
    const lightness = 15 + 70 * (node.distance / 60);
    return `hsl(200, 100%, ${Math.min(lightness, 90)}%)`;
  }
  return "white"; // Default for unvisited nodes.
}
