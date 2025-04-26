"use strict";
function countSubarrays(nums, minK, maxK) {
    let answer = 0n;
    let minPosition = -1;
    let maxPosition = -1;
    let leftBound = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            leftBound = i;
        }
        if (nums[i] === minK) {
            minPosition = i;
        }
        if (nums[i] === maxK) {
            maxPosition = i;
        }
        answer += BigInt(Math.max(0, Math.min(minPosition, maxPosition) - leftBound));
    }
    console.log(answer);
    return Number(answer);
}
;
countSubarrays([1, 3, 5, 2, 7, 5], 1, 5);
countSubarrays([1, 1, 1, 1], 1, 1);
