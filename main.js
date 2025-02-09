"use strict";
function countBadPairs(nums) {
    const N = nums.length;
    const diffCount = new Map();
    let result = 0;
    for (let i = 0; i < N; i++) {
        let diff = i - nums[i];
        let goodPairsCount = diffCount.get(diff) || 0;
        result += i - goodPairsCount;
        diffCount.set(diff, ++goodPairsCount);
    }
    console.log(diffCount);
    console.log(result);
    return result;
}
;
countBadPairs([4, 1, 3, 3]);
countBadPairs([1, 2, 3, 4, 5]);
