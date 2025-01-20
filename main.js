"use strict";
function firstCompleteIndex(arr, mat) {
    const numToIndex = new Map();
    for (let i = 0; i < arr.length; i++) {
        numToIndex.set(arr[i], i);
    }
    let result = Number.MAX_VALUE;
    let numRows = mat.length;
    let numCols = mat[0].length;
    for (let row = 0; row < numRows; row++) {
        let lastElementIndex = Number.MIN_SAFE_INTEGER;
        for (let col = 0; col < numCols; col++) {
            let indexVal = numToIndex.get(mat[row][col]);
            lastElementIndex = Math.max(lastElementIndex, indexVal);
        }
        result = Math.min(result, lastElementIndex);
    }
    for (let col = 0; col < numCols; col++) {
        let lastElementIndex = Number.MIN_SAFE_INTEGER;
        for (let row = 0; row < numRows; row++) {
            let indexVal = numToIndex.get(mat[row][col]);
            lastElementIndex = Math.max(lastElementIndex, indexVal);
        }
        result = Math.min(result, lastElementIndex);
    }
    console.log(result);
    return result;
}
;
firstCompleteIndex([1, 3, 4, 2], [[1, 4], [2, 3]]);
firstCompleteIndex([2, 8, 7, 4, 1, 3, 5, 6, 9], [[3, 2, 5], [1, 4, 6], [8, 7, 9]]);
firstCompleteIndex([4, 1, 3, 2], [[4, 1, 2, 3]]);
