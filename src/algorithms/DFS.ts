import { Grid, GridNode, UpdateGridFn, getNeighbors } from "./Dijkstra";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function dfs(
  grid: Grid,
  start: GridNode,
  end: GridNode,
  updateGrid: UpdateGridFn
): Promise<GridNode[]> {
  const stack: GridNode[] = [start];
  start.distance = 0;

  while (stack.length > 0) {
    const current = stack.pop()!;
    if (!current.isVisited) {
      current.isVisited = true;
      updateGrid(grid, current, "current");

      if (current === end) {
        return reconstructPath(current, grid, updateGrid);
      }

      for (const neighbor of getNeighbors(grid, current)) {
        if (!neighbor.isWall && !neighbor.isVisited) {
          neighbor.previousNode = current;
          neighbor.distance = current.distance + 1;
          stack.push(neighbor);
        }
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
