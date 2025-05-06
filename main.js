"use strict";
function buildArray(nums) {
    const result = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[nums[i]];
    }
    console.log(result);
    return result;
}
;
buildArray([0, 2, 1, 5, 3, 4]);
buildArray([5, 0, 1, 2, 3, 4]);
