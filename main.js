"use strict";
function resultsArray(nums, k) {
    if (k === 1) {
        console.log(nums);
        return nums;
    }
    let N = nums.length;
    const result = new Array(N - k + 1).fill(-1);
    let consecutiveCount = 1;
    for (let index = 0; index < N - 1; index++) {
        if (nums[index] + 1 === nums[index + 1])
            consecutiveCount++;
        else
            consecutiveCount = 1;
        if (consecutiveCount >= k)
            result[index - k + 2] = nums[index + 1];
    }
    console.log(result);
    return result;
}
;
resultsArray([1, 2, 3, 4, 3, 2, 5], 3);
resultsArray([2, 2, 2, 2, 2], 4);
resultsArray([3, 2, 3, 2, 3, 2], 2);
