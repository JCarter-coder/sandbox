"use strict";
function minSubArrayLen(target, nums) {
    let answer = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let right = 0;
    let windowSum = 0;
    for (right = 0; right < nums.length; right++) {
        windowSum += nums[right];
        while (windowSum >= target) {
            answer = Math.min(answer, right - left + 1);
            windowSum -= nums[left++];
        }
    }
    console.log(answer === Number.MAX_SAFE_INTEGER ? 0 : answer);
    return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
}
;
minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
minSubArrayLen(4, [1, 4, 4]);
minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
