"use strict";
function maximumSubarraySum(nums, k) {
    let maxSum = 0;
    // edge case: if k = 1, value of greatest element
    if (k === 1) {
        maxSum = Math.max(...nums);
        console.log(maxSum);
        return maxSum;
    }
    // function to determine if numbers are distinct
    const areElementsDistinct = (subArray) => {
        return new Set(subArray).size === subArray.length;
    };
    // function to determine sum
    const subArraySum = (subArray) => {
        let sum = 0;
        if (areElementsDistinct(subArray)) {
            subArray.forEach((element) => sum += element);
        }
        return sum;
    };
    let right = k;
    for (let left = 0; left <= nums.length - k; left++) {
        //console.log(nums.slice(left, right));
        maxSum = Math.max(subArraySum(nums.slice(left, right++)), maxSum);
    }
    console.log(maxSum);
    return maxSum;
}
;
maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3);
maximumSubarraySum([4, 4, 4], 3);
maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 1);
maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 13);
