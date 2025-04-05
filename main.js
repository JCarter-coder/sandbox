"use strict";
function subsetXORSum(nums) {
    let total = 0;
    for (let num of nums) {
        total |= num;
    }
    let result = total << (nums.length - 1);
    console.log(result);
    return result;
}
;
subsetXORSum([1, 3]);
subsetXORSum([5, 1, 6]);
subsetXORSum([3, 4, 5, 6, 7, 8]);
