"use strict";
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const answer = new Array();
    const twoSumII = (nums, i, answer) => {
        let lo = i + 1;
        let hi = nums.length - 1;
        while (lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi];
            if (sum < 0) {
                ++lo;
            }
            else if (sum > 0) {
                --hi;
            }
            else {
                answer.push([nums[i], nums[lo++], nums[hi--]]);
                while (lo < hi && nums[lo] === nums[lo - 1]) {
                    ++lo;
                }
            }
        }
    };
    for (let i = 0; i < nums.length && nums[i] <= 0; ++i) {
        if (i === 0 || nums[i - 1] !== nums[i]) {
            twoSumII(nums, i, answer);
        }
    }
    console.log(answer);
    return answer;
}
;
threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([0, 1, 1]);
threeSum([0, 0, 0]);
