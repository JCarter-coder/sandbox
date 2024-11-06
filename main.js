"use strict";
function majorityElement(nums) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {
            seen.set(nums[i], 1);
        }
        else
            seen.set(nums[i], seen.get(nums[i]) + 1);
    }
    let isMajority = (x) => {
        if (seen.get(x) > Math.floor(nums.length / 2))
            return true;
        else
            false;
    };
    for (let i = 0; i < nums.length; i++) {
        if (isMajority(nums[i])) {
            console.log(nums[i]);
            return nums[i];
        }
    }
    return 0;
}
;
majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
