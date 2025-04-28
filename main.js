"use strict";
function countSubarrays(nums, k) {
    const N = nums.length;
    let result = 0;
    let total = 0;
    for (let i = 0, j = 0; j < N; j++) {
        total += nums[j];
        while (i <= j && total * (j - i + 1) >= k) {
            total -= nums[i];
            i++;
        }
        result += j - i + 1;
    }
    console.log(result);
    return result;
}
;
countSubarrays([2, 1, 4, 3, 5], 10);
countSubarrays([1, 1, 1], 5);
