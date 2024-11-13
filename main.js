"use strict";
function countFairPairs(nums, lower, upper) {
    nums.sort((a, b) => a - b);
    function lowerBound(nums, value) {
        let left = 0;
        let right = nums.length - 1;
        let result = 0;
        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum < value) {
                result += (right - left);
                left++;
            }
            else
                right--;
        }
        return result;
    }
    console.log(lowerBound(nums, upper + 1) - lowerBound(nums, lower));
    return lowerBound(nums, upper + 1) - lowerBound(nums, lower);
}
;
countFairPairs([0, 1, 7, 4, 4, 5], 3, 6);
countFairPairs([1, 7, 9, 2, 5], 11, 11);
