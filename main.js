"use strict";
function minOperations(nums) {
    const N = nums.length;
    let result = 0;
    for (let i = 0; i < N - 2; i++) {
        if (nums[i] === 0) {
            nums[i] = 1;
            nums[i + 1] === 1 ? nums[i + 1] = 0 : nums[i + 1] = 1;
            nums[i + 2] === 1 ? nums[i + 2] = 0 : nums[i + 2] = 1;
            result++;
        }
        console.log(nums);
    }
    if (nums[N - 2] === 0 || nums[N - 1] === 0) {
        result = -1;
        console.log(result);
        return result;
    }
    else {
        console.log(result);
        return result;
    }
}
;
minOperations([0, 1, 1, 1, 0, 0]);
minOperations([0, 1, 1, 1]);
