function getFood(grid: string[][]): number {
    const DIRECTIONS: number[][] = [
        [0,1],
        [0,-1],
        [-1,0],
        [1,0]
    ];
    const ROWS: number = grid.length;
    const COLS: number = grid[0].length;
    
    const isValid = (x: number, y: number): boolean => {
        return (
            x >= 0 &&
            x < ROWS &&
            y >= 0 &&
            y < COLS &&
            grid[x][y] !== 'X'
        )
    }

    const bfs = (row: number, col: number): number => {
        const queue: [number, number, number][] = [[row, col, 0]];
        while (queue.length !== 0) {
            const [x, y, d] = queue.shift();
            if (!isValid(x, y)) continue;
            else if (grid[x][y] === '#') return d;

            grid[x][y] = 'X';

            for (let i = 0; i < 4; i++) {
                const new_x = x + DIRECTIONS[i][0];
                const new_y = y + DIRECTIONS[i][1];
                queue.push([new_x, new_y, d+1]);
            }
        }
        return -1;
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === '*') return bfs(i, j);
        }
    }

    return -1;
};

getFood(
    [
        ["X","X","X","X","X","X"],
        ["X","*","O","O","O","X"],
        ["X","O","O","#","O","X"],
        ["X","X","X","X","X","X"]
    ]
);
getFood(
    [
        ["X","X","X","X","X"],
        ["X","*","X","O","X"],
        ["X","O","X","#","X"],
        ["X","X","X","X","X"]
    ]
);
getFood(
    [
        ["X","X","X","X","X","X","X","X"],
        ["X","*","O","X","O","#","O","X"],
        ["X","O","O","X","O","O","X","X"],
        ["X","O","O","O","O","#","O","X"],
        ["X","X","X","X","X","X","X","X"]
    ]
);
