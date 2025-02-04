"use strict";
function maxAscendingSum(nums) {
    const N = nums.length;
    let maxSum = nums[0];
    let currSum = nums[0];
    for (let i = 1; i < N; i++) {
        if (nums[i] > nums[i - 1]) {
            currSum += nums[i];
        }
        else {
            currSum = nums[i];
        }
        maxSum = Math.max(maxSum, currSum);
    }
    console.log(maxSum);
    return maxSum;
}
;
maxAscendingSum([10, 20, 30, 5, 10, 50]);
maxAscendingSum([10, 20, 30, 40, 50]);
maxAscendingSum([12, 17, 15, 13, 10, 11, 12]);
