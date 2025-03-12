"use strict";
function maximumCount(nums) {
    let negativeCount = 0;
    let positiveCount = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0)
            negativeCount++;
        else if (nums[i] > 0)
            positiveCount++;
    }
    result = Math.max(negativeCount, positiveCount);
    console.log(result);
    return result;
}
;
maximumCount([-2, -1, -1, 1, 2, 3]);
maximumCount([-3, -2, -1, 0, 0, 1, 2]);
maximumCount([5, 20, 66, 1314]);
