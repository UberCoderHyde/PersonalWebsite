export const dijkstra = async (grid, start, end, updateGrid) => {
    let openSet = [start];
    start.distance = 0;
    const cameFrom = new Map();

    while (openSet.length > 0) {
        // Sort nodes by distance in ascending order
        openSet.sort((a, b) => a.distance - b.distance);
        const current = openSet.shift();

        updateGrid(grid, current, "current"); // Visualize current node processing

        if (current === end) {
            return await reconstructPath(cameFrom, current, grid, updateGrid); // Return the path constructed
        }

        const neighbors = getNeighbors(grid, current);
        for (const neighbor of neighbors) {
            if (neighbor.isWall || neighbor.isVisited) continue;

            const tentativeDistance = current.distance + 1; // Assuming each step has a cost of 1
            if (tentativeDistance < neighbor.distance) {
                neighbor.distance = tentativeDistance;
                cameFrom.set(neighbor, current);
                neighbor.isVisited = true;

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
    while (current) {
        path.unshift(current); // Collect each node in the path
        updateGrid(grid, current, "path");
        current = cameFrom.get(current); // Move to the previous node in the path
        await new Promise(resolve => setTimeout(resolve, 10)); // Visual delay
    }
    return path; // Return the path from start to end node
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
