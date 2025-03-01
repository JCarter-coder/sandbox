"use strict";
function applyOperations(nums) {
    let N = nums.length;
    for (let i = 0; i < N - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
        else
            continue;
    }
    for (let i = N - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    console.log(nums);
    return nums;
}
;
applyOperations([1, 2, 2, 1, 1, 0]);
applyOperations([0, 1]);
