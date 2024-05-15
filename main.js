var getMaximumGold = function(grid) {
    let rows = grid.length;
    let columns = grid[0].length;
    let maxGold = 0;
    let DIRECTIONS = [0, 1, 0, -1, 0];

    let dfsBacktrack = function(grid, rows, columns, row, col) {
        if (row < 0 || col < 0 || row === rows ||
            col === columns || grid[row][col] === 0) {
            return 0;
        }
        let maxGold = 0;

        // mark the cell as visited and save the value
        let originalVal = grid[row][col];
        grid[row][col] = 0;

        // backtrack in each of the four directions
        for (let direction = 0; direction < 4; direction++) {
            maxGold = Math.max(maxGold, dfsBacktrack(grid, rows, columns,
                DIRECTIONS[direction] + row, DIRECTIONS[direction + 1] + col));
        }

        // set the cell back to its original value
        grid[row][col] = originalVal;
        return maxGold + originalVal;

    }

    // search for the path with the maximum
    // gold starting from each cell
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            maxGold = Math.max(maxGold, dfsBacktrack(grid, rows, columns, row, column));
        }
    }
    console.log(maxGold);
    return maxGold;
};

getMaximumGold([[0,6,0],[5,8,7],[0,9,0]]);
getMaximumGold([[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]);
