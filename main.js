/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let max = 0;
    const dp = new Array(1 << 17).fill(0);
    dp[0] = 1;

    for (let num of nums) {
        for (let i = max; i >= 0; i--) {
            dp[i | num] += dp[i];
        }
        max |= num;
    }
    console.log(dp[max]);
};

countMaxOrSubsets([3,1]);
countMaxOrSubsets([2,2,2]);
countMaxOrSubsets([3,2,1,5]);
