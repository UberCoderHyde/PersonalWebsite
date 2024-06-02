export const dfs = async (grid, start, end, updateGrid) => {
    let stack = [start];
    start.distance = 0;  // Initialize the distance for the start node

    while (stack.length > 0) {
        const current = stack.pop();

        if (!current.isVisited) {
            current.isVisited = true;
            updateGrid(grid, current, "current");

            if (current === end) {
                return await reconstructPath(current);
            }

            const neighbors = getNeighbors(grid, current);
            for (const neighbor of neighbors) {
                if (!neighbor.isWall && !neighbor.isVisited) {
                    neighbor.previousNode = current;
                    neighbor.distance = current.distance + 1;  // Set distance as one more than the current node
                    stack.push(neighbor);
                }
            }
        }

        await new Promise(resolve => setTimeout(resolve, 100)); // Visual delay
    }

    return []; // If no path is found
};


const getNeighbors = (grid, node) => {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // Down, Up, Right, Left
    const neighbors = [];
    const { row, col } = node;

    directions.forEach(([dx, dy]) => {
        const newRow = row + dx;
        const newCol = col + dy;
        if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
            neighbors.push(grid[newRow][newCol]);
        }
    });

    return neighbors;
};

const reconstructPath = async (endNode) => {
    const path = [];
    let current = endNode;

    while (current) {
        path.unshift(current);
        current = current.previousNode;
    }

    return path;
};
