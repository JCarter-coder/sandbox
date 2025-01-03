function waysToSplitArray(nums: number[]): number {
    let N: number = nums.length;
    let result: number = 0;
    const dp: number[][] = new Array(N);

    let sum: number = 0;
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(2);
        sum += nums[i];
        dp[i][0] = sum;
    }

    sum = 0;
    for (let i = N - 1; i >= 0; i--) {
        sum += nums[i];
        dp[i][1] = sum;
        if (i <= N - 2 && dp[i][0] >= dp[i + 1][1]) result++;
    }

    console.log(...dp);

    console.log(result);
    return result;
};

waysToSplitArray([10,4,-8,7]);
waysToSplitArray([2,3,1,0]);
