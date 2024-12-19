"use strict";
function maximumLengthOfRanges(nums) {
    const ans = new Array();
    let N = nums.length;
    const left = new Array(N);
    const right = new Array(N);
    let idxStack = new Array();
    for (let i = 0; i < N; i++) {
        while (idxStack.length > 0 &&
            nums[idxStack[idxStack.length - 1]] < nums[i]) {
            idxStack.pop();
        }
        left[i] = idxStack.length === 0 ? -1 : idxStack[idxStack.length - 1];
        idxStack.push(i);
    }
    //console.log(idxStack);
    //console.log(`Left: ${left}`);
    idxStack = [];
    for (let i = N - 1; i >= 0; i--) {
        while (idxStack.length > 0 &&
            nums[idxStack[idxStack.length - 1]] < nums[i]) {
            idxStack.pop();
        }
        right[i] = idxStack.length === 0 ? N : idxStack[idxStack.length - 1];
        idxStack.push(i);
    }
    for (let i = 0; i < N; i++) {
        ans[i] = right[i] - left[i] - 1;
    }
    //console.log(idxStack);
    //console.log(`Right: ${right}`);
    console.log(`Answer: ${ans}`);
    return ans;
}
;
maximumLengthOfRanges([1, 5, 4, 3, 6]);
maximumLengthOfRanges([1, 2, 3, 4, 5]);
