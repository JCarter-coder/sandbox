"use strict";
function countCompleteSubarrays(nums) {
    let result = 0;
    const n = nums.length;
    const uniqueCount = new Set(nums).size;
    const countMap = new Map();
    let right = 0;
    for (let left = 0; left < n; left++) {
        if (left > 0) {
            const remove = nums[left - 1];
            countMap.set(remove, countMap.get(remove) - 1);
            if (countMap.get(remove) === 0) {
                countMap.delete(remove);
            }
        }
        while (right < n && countMap.size < uniqueCount) {
            const add = nums[right];
            countMap.set(add, (countMap.get(add) || 0) + 1);
            right++;
        }
        if (countMap.size === uniqueCount) {
            result += n - right + 1;
        }
    }
    console.log(result);
    return result;
}
;
countCompleteSubarrays([1, 3, 1, 2, 2]);
countCompleteSubarrays([5, 5, 5, 5]);
