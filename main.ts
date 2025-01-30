function findMaxFish(grid: number[][]): number {
    const ROWS: number = grid.length;
    const COLS: number = grid[0].length;
    const visited: boolean[][] = Array.from(
        { length: ROWS }, () => Array(COLS).fill(false)
    );

    const calculateFishes = (
        grid: number[][],
        visited: boolean[][],
        row: number,
        col: number
    ): number => {
        if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length ||
            grid[row][col] === 0 ||
            visited[row][col]
        ) return 0;

        visited[row][col] = true;
        return (
            grid[row][col] +
            calculateFishes(grid, visited, row, col + 1) +
            calculateFishes(grid, visited, row, col - 1) +
            calculateFishes(grid, visited, row + 1, col) +
            calculateFishes(grid, visited, row - 1, col)
        );
    }

    let maxFishCount = 0;

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] > 0 && !visited[row][col]) {
                maxFishCount = Math.max(
                    maxFishCount,
                    calculateFishes(grid, visited, row, col)
                );
            }
        }
    }

    console.log(maxFishCount);
    return maxFishCount;
};

findMaxFish([[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]);
findMaxFish([[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]);
