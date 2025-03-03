"use strict";
function pivotArray(nums, pivot) {
    const lessThanPivot = new Array();
    const pivotArray = new Array();
    const greaterThanPivot = new Array();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            lessThanPivot.push(nums[i]);
        }
        else if (nums[i] === pivot) {
            pivotArray.push(nums[i]);
        }
        else {
            greaterThanPivot.push(nums[i]);
        }
    }
    nums = lessThanPivot;
    nums.push(...pivotArray);
    nums.push(...greaterThanPivot);
    console.log(nums);
    return nums;
}
;
pivotArray([9, 12, 5, 10, 14, 3, 10], 10);
pivotArray([-3, 4, 3, 2], 2);
