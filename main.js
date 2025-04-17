"use strict";
function countPairs(nums, k) {
    const N = nums.length;
    let count = 0;
    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            if (nums[i] === nums[j] &&
                (i * j) % k === 0) {
                count++;
            }
        }
    }
    console.log(count);
    return count;
}
;
countPairs([3, 1, 2, 2, 2, 1, 3], 2);
countPairs([1, 2, 3, 4], 1);
