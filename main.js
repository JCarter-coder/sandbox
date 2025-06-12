"use strict";
function maxAdjacentDistance(nums) {
    let maxDistance = Math.abs(nums[0] - nums[nums.length - 1]);
    for (let i = 0; i < nums.length - 1; i++) {
        maxDistance = Math.max(maxDistance, Math.abs(nums[i] - nums[i + 1]));
    }
    console.log(maxDistance);
    return maxDistance;
}
;
maxAdjacentDistance([1, 2, 4]);
maxAdjacentDistance([-5, -10, -5]);
