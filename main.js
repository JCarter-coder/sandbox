"use strict";
function isZeroArray(nums, queries) {
    const deltaArray = new Array(nums.length + 1).fill(0);
    for (const [left, right] of queries) {
        deltaArray[left] += 1;
        deltaArray[right + 1] -= 1;
    }
    const operationCounts = [];
    let currentOperations = 0;
    for (const delta of deltaArray) {
        currentOperations += delta;
        operationCounts.push(currentOperations);
    }
    for (let i = 0; i < nums.length; i++) {
        if (operationCounts[i] < nums[i]) {
            return false;
        }
    }
    return true;
}
;
isZeroArray([1, 0, 1], [[0, 2]]);
isZeroArray([4, 3, 2, 1], [[1, 3], [0, 2]]);
