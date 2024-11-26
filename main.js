"use strict";
function jump(nums) {
    let answer = 0;
    let N = nums.length;
    let currEnd = 0;
    let currFar = 0;
    for (let i = 0; i < N - 1; i++) {
        currFar = Math.max(currFar, i + nums[i]);
        if (i === currEnd) {
            answer++;
            currEnd = currFar;
        }
    }
    console.log(answer);
    return answer;
}
;
jump([2, 3, 1, 1, 4]);
jump([2, 3, 0, 1, 4]);
