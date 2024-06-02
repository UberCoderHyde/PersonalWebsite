export const heuristic = (a, b) => {
  // Manhattan distance is a good heuristic for a grid
  return Math.abs(a.col - b.col) + Math.abs(a.row - b.row);
};

// This is a conceptual modification. Ensure this logic matches your actual A* algorithm file and usage.
export const aStar = async (grid, start, end, updateGrid) => {
  let openSet = [start];
  start.distance = 0;  // Ensure start node distance is set to 0
  start.isVisited = true;  // Mark the start node as visited
  const cameFrom = new Map();

  while (openSet.length > 0) {
    openSet.sort((a, b) => (a.distance + heuristic(a, end)) - (b.distance + heuristic(b, end)));
    const current = openSet.shift();
    console.log(`Current node: [${current.row}, ${current.col}], Distance: ${current.distance}`);

    updateGrid(grid, current, "current"); // Visualize current node processing

    if (current === end) {
      return await reconstructPath(cameFrom, current, grid, updateGrid); // Return the path constructed
    }

    const neighbors = getNeighbors(grid, current);
    for (const neighbor of neighbors) {
      if (neighbor.isWall || neighbor.isVisited) continue;
    
      const tentativeDistance = current.distance + 1; // Assuming each step cost is 1
      if (tentativeDistance < neighbor.distance) {
        neighbor.distance = tentativeDistance;
        cameFrom.set(neighbor, current);
        neighbor.isVisited = true; // Mark as visited
        console.log(`Updating neighbor at [${neighbor.row}, ${neighbor.col}] to distance: ${neighbor.distance}`);

        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
          updateGrid(grid, neighbor, "open"); // Visualize neighbor as open
        }
      }
    }
    

    await new Promise(resolve => setTimeout(resolve, 50)); // Visual delay
  }

  return []; // Return empty path if no path is found
};



const reconstructPath = async (cameFrom, current, grid, updateGrid) => {
  const path = [];
  let temp = current;
  while (temp) {
    path.push(temp); // Collect each node in the path
    updateGrid(grid, temp, "path");
    temp = cameFrom.get(temp); // Move to the previous node in the path
    await new Promise(resolve => setTimeout(resolve, 10)); // Visual delay
  }
  return path.reverse(); // Return the path from start to end node
};


const getNeighbors = (grid, node) => {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // Possible movements: down, up, right, left
  const neighbors = [];
  const { row, col } = node;

  directions.forEach(([dx, dy]) => {
    const x = row + dx, y = col + dy;
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
      neighbors.push(grid[x][y]);
    }
  });

  return neighbors;
};