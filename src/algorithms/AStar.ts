import { Grid, GridNode, UpdateGridFn } from "./Dijkstra";

// Manhattan distance heuristic
export function heuristic(a: GridNode, b: GridNode): number {
  return Math.abs(a.col - b.col) + Math.abs(a.row - b.row);
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function aStar(
  grid: Grid,
  start: GridNode,
  end: GridNode,
  updateGrid: UpdateGridFn
): Promise<GridNode[]> {
  const openSet: GridNode[] = [start];
  start.distance = 0;
  start.isVisited = true;
  const cameFrom = new Map<GridNode, GridNode>();

  while (openSet.length > 0) {
    openSet.sort(
      (a, b) =>
        a.distance + heuristic(a, end) - (b.distance + heuristic(b, end))
    );
    const current = openSet.shift()!;

    console.log(
      `Current node: [${current.row}, ${current.col}], Distance: ${current.distance}`
    );
    updateGrid(grid, current, "current");

    if (current === end) {
      return reconstructPath(cameFrom, current, grid, updateGrid);
    }

    for (const neighbor of getNeighbors(grid, current)) {
      if (neighbor.isWall || neighbor.isVisited) continue;

      const tentativeDistance = current.distance + 1;
      if (tentativeDistance < neighbor.distance) {
        neighbor.distance = tentativeDistance;
        cameFrom.set(neighbor, current);
        neighbor.isVisited = true;

        console.log(
          `Updating neighbor at [${neighbor.row}, ${neighbor.col}] to distance: ${neighbor.distance}`
        );

        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
          updateGrid(grid, neighbor, "open");
        }
      }
    }

    await delay(50);
  }

  return [];
}

async function reconstructPath(
  cameFrom: Map<GridNode, GridNode>,
  current: GridNode,
  grid: Grid,
  updateGrid: UpdateGridFn
): Promise<GridNode[]> {
  const path: GridNode[] = [];
  let node: GridNode | undefined = current;

  while (node) {
    path.push(node);
    updateGrid(grid, node, "path");
    node = cameFrom.get(node);
    await delay(10);
  }

  return path.reverse();
}

export function getNeighbors(grid: Grid, node: GridNode): GridNode[] {
  const dirs: [number, number][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const { row, col } = node;
  const result: GridNode[] = [];

  for (const [dx, dy] of dirs) {
    const x = row + dx,
      y = col + dy;
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
      result.push(grid[x][y]);
    }
  }
  return result;
}
