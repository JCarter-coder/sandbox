"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let pointer0 = 0;
    let pointer1 = 0;
    let pointer2 = nums.length - 1;
    while (pointer1 <= pointer2) {
        if (nums[pointer1] === 0) {
            [nums[pointer0], nums[pointer1]] = [nums[pointer1], nums[pointer0]];
            pointer0++;
            pointer1++;
        }
        else if (nums[pointer1] === 1) {
            pointer1++;
        }
        else {
            [nums[pointer1], nums[pointer2]] = [nums[pointer2], nums[pointer1]];
            pointer2--;
        }
    }
    console.log(nums);
}
;
sortColors([2, 0, 2, 1, 1, 0]);
sortColors([2, 0, 1]);
