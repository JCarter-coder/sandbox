function sumRemoteness(grid: number[][]): number {
    const N: number = grid.length;
    const DIR: number[][] = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0]
    ];

    const isValid = (
        grid: number[][],
        row: number,
        col: number
    ): boolean => {
        const N = grid.length;
        return (
            row >= 0 &&
            col >= 0 &&
            row < N &&
            col < N &&
            grid[row][col] > 0
        );
    }

    const bfs = (
        grid: number[][],
        row: number,
        col: number,
        totalSum: number
    ): number => {
        let compSum = grid[row][col];
        let compSize = 1;
        grid[row][col] = -1;

        const queue: number[][] = new Array();
        queue.push([row, col]);

        while (queue.length !== 0) {
            let curr = queue.shift();
            if (curr !== undefined) {
                for (let d of DIR) {
                    let newRow = d[0] + curr[0];
                    let newCol = d[1] + curr[1];
                    if (isValid(grid, newRow, newCol)) {
                        queue.push([newRow, newCol]);
                        compSum += grid[newRow][newCol];
                        compSize++;
                        grid[newRow][newCol] = -1
                    }
                }
            }
        }

        return (totalSum - compSum) * compSize;
    }

    let totalSum: number = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] !== -1) totalSum += grid[i][j];
        }
    }

    let result = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] > 0) {
                result += bfs(grid, i, j, totalSum);
            }
        }
    }

    console.log(result);
    return result;
};

sumRemoteness([[-1,1,-1],[5,-1,4],[-1,3,-1]]);
sumRemoteness([[-1,3,4],[-1,-1,-1],[3,-1,-1]]);
sumRemoteness([[1]]);
