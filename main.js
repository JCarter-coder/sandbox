"use strict";
function divideArray(nums, k) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] > k) {
            console.log([]);
            return [];
        }
        result[i / 3] = [nums[i], nums[i + 1], nums[i + 2]];
    }
    console.log(result);
    return result;
}
;
divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2);
divideArray([2, 4, 2, 2, 5, 2], 2);
divideArray([4, 2, 9, 8, 2, 12, 7, 12, 10, 5, 8, 5, 5, 7, 9, 2, 5, 11], 14);
