function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
    const UNGUARDED: number = 0;
    const GUARDED: number = 1;
    const GUARD: number = 2;
    const WALL: number = 3;

    // create a function to change the space
    const markGuarded = (row: number, col: number, grid: number[][]): void => {
        // UP
        for (let r = row - 1; r >= 0; r--) {
            if (grid[r][col] === WALL || grid[r][col] === GUARD) break;
            grid[r][col] = GUARDED;
        }
        // DOWN
        for (let r = row + 1; r < grid.length; r++) {
            if (grid[r][col] === WALL || grid[r][col] === GUARD) break;
            grid[r][col] = GUARDED;
        }
        // LEFT
        for (let c = col - 1; c >= 0; c--) {
            if (grid[row][c] === WALL || grid[row][c] === GUARD) break;
            grid[row][c] = GUARDED;
        }
        // RIGHT
        for (let c = col + 1; c < grid[0].length; c++) {
            if (grid[row][c] === WALL || grid[row][c] === GUARD) break;
            grid[row][c] = GUARDED;
        }
    }

    // create the space
    const grid = new Array();
    for (let i = 0; i < m; i++) {
        grid.push(new Array(n).fill(UNGUARDED));
    }

    for (let wall of walls) {
        grid[wall[0]][wall[1]] = WALL;
    }

    for (let guard of guards) {
        grid[guard[0]][guard[1]] = GUARD;
    }

    // mark cells as guarded
    for (let guard of guards) {
        markGuarded(guard[0], guard[1], grid);
    }
    
    // loop through rows and count unguarded cells
    let count: number = 0;
    for (let row of grid) {
        for (let cell of row) {
            if (cell === UNGUARDED) count++;
        }
    }

    console.log(grid);
    console.log(count);

    return count;
};

countUnguarded(4,6,[[0,0],[1,1],[2,3]],[[0,1],[2,2],[1,4]]);
countUnguarded(3,3,[[1,1]],[[0,1],[1,0],[2,1],[1,2]]);
