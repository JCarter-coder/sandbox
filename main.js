"use strict";
function countGood(nums, k) {
    const N = nums.length;
    let same = 0;
    let right = -1;
    const count = new Map();
    let ans = 0n;
    for (let left = 0; left < N; left++) {
        while (right + 1 < N && same < k) {
            right++;
            same += count.get(nums[right]) || 0;
            count.set(nums[right], (count.get(nums[right]) || 0) + 1);
        }
        if (same >= k) {
            ans += BigInt(N - right);
        }
        count.set(nums[left], (count.get(nums[left]) || 0) - 1);
        same -= count.get(nums[left]) || 0;
    }
    console.log(ans.toString());
    return Number(ans);
}
;
countGood([1, 1, 1, 1, 1], 10);
countGood([3, 1, 4, 3, 2, 2, 4], 2);
