"use strict";
function gridGame(grid) {
    let firstRowSum = 0;
    for (let num of grid[0]) {
        firstRowSum += num;
    }
    let secondRowSum = 0;
    let minimumSum = Number.MAX_SAFE_INTEGER;
    for (let turnIndex = 0; turnIndex < grid[0].length; turnIndex++) {
        firstRowSum -= grid[0][turnIndex];
        minimumSum = Math.min(minimumSum, Math.max(firstRowSum, secondRowSum));
        secondRowSum += grid[1][turnIndex];
    }
    console.log(minimumSum);
    return minimumSum;
}
;
gridGame([[2, 5, 4], [1, 5, 1]]);
gridGame([[3, 3, 1], [8, 5, 2]]);
gridGame([[1, 3, 1, 15], [1, 3, 3, 1]]);
