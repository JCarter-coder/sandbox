"use strict";
function twoSum(nums, target) {
    const map = new Map();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            result = [map.get(complement), i];
            break;
        }
        else
            map.set(nums[i], i);
    }
    console.log(result);
    return result;
}
;
twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
