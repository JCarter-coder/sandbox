"use strict";
function maxMatrixSum(matrix) {
    let totalSum = 0;
    let minAbsVal = Number.MAX_SAFE_INTEGER;
    let negativeCount = 0;
    for (let row of matrix) {
        for (let val of row) {
            totalSum += Math.abs(val);
            if (val < 0)
                negativeCount++;
            minAbsVal = Math.min(minAbsVal, Math.abs(val));
        }
    }
    if (negativeCount % 2 != 0)
        totalSum -= 2 * minAbsVal;
    console.log(totalSum);
    return totalSum;
}
;
maxMatrixSum([[1, -1], [-1, 1]]);
maxMatrixSum([[1, 2, 3], [-1, -2, -3], [1, 2, 3]]);
