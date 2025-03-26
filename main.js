"use strict";
function minOperations(grid, x) {
    const numsArray = grid.flat().flat();
    let result = 0;
    numsArray.sort((a, b) => a - b);
    let arrayLength = numsArray.length;
    let meanIndex = Math.floor(arrayLength / 2);
    let finalCommonNumber = numsArray[meanIndex];
    for (let num of numsArray) {
        if (num % x !== finalCommonNumber % x) {
            console.log(-1);
            return -1;
        }
        result += Math.floor(Math.abs(finalCommonNumber - num) / x);
    }
    console.log(result);
    return result;
}
;
minOperations([[2, 4], [6, 8]], 2);
minOperations([[1, 5], [2, 3]], 1);
minOperations([[1, 2], [3, 4]], 2);
