"use strict";
function minimizeMax(nums, p) {
    const countValidPairs = (nums, threshold) => {
        let index = 0;
        let count = 0;
        while (index < nums.length - 1) {
            if (nums[index + 1] - nums[index] <= threshold) {
                count++;
                index++;
            }
            index++;
        }
        return count;
    };
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let left = 0;
    let right = nums[n - 1] - nums[0];
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (countValidPairs(nums, mid) >= p) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    console.log(left);
    return left;
}
;
minimizeMax([10, 1, 2, 7, 1, 3], 2);
minimizeMax([4, 2, 1, 2], 1);
