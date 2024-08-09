var numMagicSquaresInside = function(grid) {
    let ans = 0;
    let m = grid.length;
    let n = grid[0].length;

    let isMagicSquare = (grid, row, col) => {
        const seen = new Array(9).fill(false);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let num = grid[row + i][col + j];
                if (num < 1 || num > 9) return false;
                if (seen[num]) return false;
                seen[num] = true;
            }
        }

        let diagonal1 = grid[row][col] + grid[row+1][col+1] + grid[row+2][col+2];
        let diagonal2 = grid[row+2][col] + grid[row+1][col+1] + grid[row][col+2];

        if (diagonal1 !== diagonal2) return false;

        let row1 = grid[row][col] + grid[row][col+1] + grid[row][col+2];
        let row2 = grid[row+1][col] + grid[row+1][col+1] + grid[row+1][col+2];
        let row3 = grid[row+2][col] + grid[row+2][col+1] + grid[row+2][col+2];

        if (!(row1 === diagonal1 && row2 === diagonal1 && row3 === diagonal1)) return false;

        let col1 = grid[row][col] + grid[row+1][col] + grid[row+2][col];
        let col2 = grid[row][col+1] + grid[row+1][col+1] + grid[row+2][col+1];
        let col3 = grid[row][col+2] + grid[row+1][col+2] + grid[row+2][col+2];

        if (!(col1 === diagonal1 && col2 === diagonal1 && col3 === diagonal1)) return false;

        return true;
    }

    for (let row = 0; row + 2 < m; row++) {
        for (let col = 0; col + 2 < n; col++) {
            if (isMagicSquare(grid, row, col)) ans++;
        }
    }

    console.log(ans);
};

numMagicSquaresInside([[4,3,8,4],[9,5,1,9],[2,7,6,2]]);
numMagicSquaresInside([[8]]);
