"use strict";
function removeDuplicates(nums) {
    let write = 1;
    for (let read = 1; read < nums.length; read++) {
        if (nums[read - 1] !== nums[read]) {
            nums[write++] = nums[read];
        }
    }
    console.log(write);
    return write;
}
;
removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
