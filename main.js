"use strict";
function minScore(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    const nums = new Array();
    let rowMax = new Array(rows).fill(1);
    let colMax = new Array(cols).fill(1);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            nums.push([grid[i][j], i, j]);
        }
    }
    nums.sort((a, b) => a[0] - b[0]);
    for (let num of nums) {
        let value = num[0];
        let x = num[1];
        let y = num[2];
        let newValue = Math.max(rowMax[x], colMax[y]);
        grid[x][y] = newValue;
        rowMax[x] = newValue + 1;
        colMax[y] = newValue + 1;
    }
    console.log(grid);
    return grid;
}
;
minScore([[3, 1], [2, 5]]);
minScore([[10]]);
