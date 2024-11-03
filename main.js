"use strict";
function removeElement(nums, val) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        }
        else
            left++;
    }
    ;
    console.log(right);
    return right;
}
;
removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
removeElement([1], 1);
