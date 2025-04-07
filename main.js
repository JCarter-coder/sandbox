"use strict";
function canPartition(nums) {
    let totalSum = 0;
    for (let num of nums) {
        totalSum += num;
    }
    if (totalSum % 2 !== 0) {
        console.log(false);
        return false;
    }
    let subsetSum = Math.floor(totalSum / 2);
    const dp = new Array(subsetSum + 1).fill(false);
    dp[0] = true;
    for (let curr of nums) {
        for (let j = subsetSum; j >= curr; j--) {
            dp[j] = dp[j] || dp[j - curr];
        }
    }
    console.log(dp[subsetSum]);
    return dp[subsetSum];
}
;
canPartition([1, 5, 11, 5]); // true
canPartition([1, 2, 3, 5]); // false
