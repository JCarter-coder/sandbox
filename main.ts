function maxSumAfterOperation(nums: number[]): number {
    const N: number = nums.length;
    const dp: number[][] = new Array(nums.length);

    for (let i = 0; i < N; i++) {
        dp[i] = new Array(2);
    }

    // Base Case
    dp[0][0] = nums[0];
    dp[0][1] = nums[0] * nums[0];

    let maxSum = dp[0][1];

    for (let i = 1; i < N; i++) {
        dp[i][0] = Math.max(
            nums[i],
            dp[i - 1][0] + nums[i]
        );

        dp[i][1] = Math.max(
            Math.max(
                nums[i] * nums[i],
                dp[i - 1][0] + nums[i] * nums[i]
            ),
            dp[i - 1][1] + nums[i]
        );

        maxSum = Math.max(maxSum, dp[i][1]);
        console.log(...dp);
    }

    console.log(maxSum);
    return maxSum;
};

maxSumAfterOperation([2,-1,-4,-3]);
maxSumAfterOperation([1,-1,1,1,-1,-1,1]);
