function countServers(grid: number[][]): number {
    if (grid === null || grid.length === 0) {
        console.log(0);
        return 0;
    }

    const rowCounts = new Array(grid[0].length).fill(0);
    const colCounts = new Array(grid.length).fill(0);

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                rowCounts[col]++;
                colCounts[row]++;
            }
        }
    }

    let result: number = 0; 

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                if (rowCounts[col] > 1 || colCounts[row] > 1) {
                    result++;
                }
            }
        }
    }

    console.log(result);
    return result;
};

countServers([[1,0],[0,1]]);
countServers([[1,0],[1,1]]);
countServers([[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]);
countServers([[1,0,0,1,0],[0,0,0,0,0],[0,0,0,1,0]]);
