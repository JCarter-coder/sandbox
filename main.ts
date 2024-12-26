function findTargetSumWays(nums: number[], target: number): number {
    let totalSum: number = 0;
    for (let num of nums) {
        totalSum += num;
    }
    let dp: number[] = new Array(2 * totalSum + 1).fill(0);
    dp[nums[0] + totalSum] = 1; // adding nums[0]
    dp[-nums[0] + totalSum] += 1; // subtracting nums[0]

    // fill the table
    for (let i = 1; i < nums.length; i++) {
        let next: number[] = new Array(2 * totalSum + 1).fill(0);
        for (let sum = -totalSum; sum <= totalSum; sum++) {
            if (dp[sum + totalSum] > 0) {
                next[sum + nums[i] + totalSum] += dp[sum + totalSum];
                next[sum - nums[i] + totalSum] += dp[sum + totalSum];
            }
        }
        //console.log(`dp[${i}]: ${dp[i]}`);
        dp = next;
    }
    //console.log(dp);

    console.log(Math.abs(target) > totalSum ? 0 : dp[target + totalSum]);
    return Math.abs(target) > totalSum ? 0 : dp[target + totalSum];
};

findTargetSumWays([1,1,1,1,1],3);
findTargetSumWays([1],1);
