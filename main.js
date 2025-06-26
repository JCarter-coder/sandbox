"use strict";
function findKDistantIndices(nums, key, k) {
    const res = [];
    let r = 0;
    const n = nums.length;
    for (let j = 0; j < n; ++j) {
        if (nums[j] === key) {
            const l = Math.max(r, j - k);
            r = Math.min(n - 1, j + k) + 1;
            for (let i = l; i < r; ++i) {
                res.push(i);
            }
        }
    }
    console.log(res);
    return res;
}
;
findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1);
findKDistantIndices([2, 2, 2, 2, 2], 2, 2);
