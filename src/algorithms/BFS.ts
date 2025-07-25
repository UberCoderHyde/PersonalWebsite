import { Grid, GridNode, UpdateGridFn, getNeighbors } from "./Dijkstra";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function bfs(
  grid: Grid,
  start: GridNode,
  end: GridNode,
  updateGrid: UpdateGridFn
): Promise<GridNode[]> {
  const queue: GridNode[] = [start];
  start.isVisited = true;
  start.distance = 0;

  while (queue.length > 0) {
    const current = queue.shift()!;
    updateGrid(grid, current, "current");

    if (current === end) {
      return reconstructPath(current, grid, updateGrid);
    }

    for (const neighbor of getNeighbors(grid, current)) {
      if (!neighbor.isWall && !neighbor.isVisited) {
        neighbor.isVisited = true;
        neighbor.previousNode = current;
        neighbor.distance = current.distance + 1;
        queue.push(neighbor);
      }
    }

    await delay(100);
  }

  return [];
}

async function reconstructPath(
  endNode: GridNode,
  grid: Grid,
  updateGrid: UpdateGridFn
): Promise<GridNode[]> {
  const path: GridNode[] = [];
  let current: GridNode | null = endNode;

  while (current) {
    path.unshift(current);
    updateGrid(grid, current, "path");
    current = current.previousNode;
    await delay(10);
  }

  return path;
}
