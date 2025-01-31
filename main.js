"use strict";
function largestIsland(grid) {
    const exploreIsland = (grid, islandId, currentRow, currentColumn) => {
        if (currentRow < 0 ||
            currentRow >= grid.length ||
            currentColumn < 0 ||
            currentColumn >= grid[0].length ||
            grid[currentRow][currentColumn] !== 1)
            return 0;
        grid[currentRow][currentColumn] = islandId;
        return (1 +
            exploreIsland(grid, islandId, currentRow + 1, currentColumn) +
            exploreIsland(grid, islandId, currentRow - 1, currentColumn) +
            exploreIsland(grid, islandId, currentRow, currentColumn + 1) +
            exploreIsland(grid, islandId, currentRow, currentColumn - 1));
    };
    const islandSizes = new Map();
    let islandId = 2;
    for (let currentRow = 0; currentRow < grid.length; currentRow++) {
        for (let currentColumn = 0; currentColumn < grid[0].length; currentColumn++) {
            if (grid[currentRow][currentColumn] === 1) {
                islandSizes.set(islandId, exploreIsland(grid, islandId, currentRow, currentColumn));
                islandId++;
            }
        }
    }
    if (islandSizes.size === 0) {
        console.log(1);
        return 1;
    }
    if (islandSizes.size === 1) {
        islandId--;
        return ((islandSizes.get(islandId) === grid.length * grid[0].length) ?
            islandSizes.get(islandId) :
            islandSizes.get(islandId) + 1);
    }
    let maxIslandSize = 1;
    for (let currentRow = 0; currentRow < grid.length; currentRow++) {
        for (let currentColumn = 0; currentColumn < grid[0].length; currentColumn++) {
            if (grid[currentRow][currentColumn] === 0) {
                let currentIslandSize = 1;
                const neighboringIslands = new Set();
                if (currentRow + 1 < grid.length &&
                    grid[currentRow + 1][currentColumn] > 1) {
                    neighboringIslands.add(grid[currentRow + 1][currentColumn]);
                }
                if (currentRow - 1 >= 0 &&
                    grid[currentRow - 1][currentColumn] > 1) {
                    neighboringIslands.add(grid[currentRow - 1][currentColumn]);
                }
                if (currentColumn + 1 < grid[0].length &&
                    grid[currentRow][currentColumn + 1] > 1) {
                    neighboringIslands.add(grid[currentRow][currentColumn + 1]);
                }
                if (currentColumn - 1 >= 0 &&
                    grid[currentRow][currentColumn - 1]) {
                    neighboringIslands.add(grid[currentRow][currentColumn - 1]);
                }
                for (let id of neighboringIslands) {
                    currentIslandSize += islandSizes.get(id);
                }
                maxIslandSize = Math.max(maxIslandSize, currentIslandSize);
            }
        }
    }
    console.log(maxIslandSize);
    return maxIslandSize;
}
;
largestIsland([[1, 0], [0, 1]]);
largestIsland([[1, 1], [1, 0]]);
largestIsland([[1, 1], [1, 1]]);
