class ChangeValues {
    constructor(values) {
        this.values = values;
        for (let i = 0; i < values.length; i++) {
            if (values[i] === 0) {
                values[i] = 1;
            } else values[i] = 0;
        }
        return values;
    }
}

var matrixScore = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    // if row starts with a zero, flip values of row
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            grid[i] = new ChangeValues(grid[i]);
        }
    }
    // if column has more zeros than ones, flip values
    for (let i = 1; i < n; i++) {
        let columnSum = 0;
        let columnArray = [];
        for (let j = 0; j < m; j++) {
            columnArray.push(grid[j][i]);
            columnSum += grid[j][i]
        }
        if (columnSum/m < 0.5) {
            let replaceColumn = new ChangeValues(columnArray);
            for (let j = 0; j < replaceColumn.length; j++) {
                grid[j][i] = replaceColumn[j];
            }
        }
    }
    let highestScore = 0;
    for (let i = 0; i < m; i++) {
        let score = 0;
        // calculate the binary value of each row
        for (let j = n - 1; j >= 0; j--) {
            score += grid[i][j] * 2**((n - 1) - j)
        }
        console.log(score);
        highestScore += score;
    }
    console.log(highestScore);
};

matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]]);
matrixScore([[0]]);
