export type Status = "current" | "open" | "path";

export interface GridNode {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  distance: number;
  isVisited: boolean;
  previousNode: GridNode | null;
  isPath: boolean;
  status?: Status;
}

export type Grid = GridNode[][];

export type UpdateGridFn = (grid: Grid, node: GridNode, status: Status) => void;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function dijkstra(
  grid: Grid,
  start: GridNode,
  end: GridNode,
  updateGrid: UpdateGridFn
): Promise<GridNode[]> {
  const openSet: GridNode[] = [start];
  start.distance = 0;
  const cameFrom = new Map<GridNode, GridNode>();

  while (openSet.length > 0) {
    openSet.sort((a, b) => a.distance - b.distance);
    const current = openSet.shift()!;

    updateGrid(grid, current, "current");

    if (current === end) {
      return reconstructPath(cameFrom, current, grid, updateGrid);
    }

    const neighbors = getNeighbors(grid, current);
    for (const neighbor of neighbors) {
      if (neighbor.isWall || neighbor.isVisited) continue;

      const tentativeDistance = current.distance + 1;
      if (tentativeDistance < neighbor.distance) {
        neighbor.distance = tentativeDistance;
        cameFrom.set(neighbor, current);
        neighbor.isVisited = true;

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
    path.unshift(node);
    updateGrid(grid, node, "path");
    node = cameFrom.get(node);
    await delay(10);
  }

  return path;
}

export function getNeighbors(grid: Grid, node: GridNode): GridNode[] {
  const directions: [number, number][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const neighbors: GridNode[] = [];
  const { row, col } = node;

  for (const [dx, dy] of directions) {
    const x = row + dx;
    const y = col + dy;
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
      neighbors.push(grid[x][y]);
    }
  }

  return neighbors;
}
