"use strict";
function waysToSplitArray(nums) {
    let N = nums.length;
    let result = 0;
    let rightSum = 0;
    for (let i = 0; i < N; i++) {
        rightSum += nums[i];
    }
    let leftSum = 0;
    for (let i = 0; i < N - 1; i++) {
        leftSum += nums[i];
        rightSum -= nums[i];
        if (leftSum >= rightSum)
            result++;
    }
    console.log(result);
    return result;
}
;
waysToSplitArray([10, 4, -8, 7]);
waysToSplitArray([2, 3, 1, 0]);
