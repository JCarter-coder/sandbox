"use strict";
function maxAbsoluteSum(nums) {
    let minPrefixSum = 0;
    let maxPrefixSum = 0;
    let prefixSum = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        minPrefixSum = Math.min(minPrefixSum, prefixSum);
        maxPrefixSum = Math.max(maxPrefixSum, prefixSum);
    }
    console.log(maxPrefixSum - minPrefixSum);
    return maxPrefixSum - minPrefixSum;
}
;
maxAbsoluteSum([1, -3, 2, 3, -4]);
maxAbsoluteSum([2, -5, 1, -4, 3, -2]);
