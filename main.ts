function largestDivisibleSubset(nums: number[]): number[] {
    const N: number = nums.length;
    nums.sort((a,b) => a - b);
    const dp: number[][] = Array.from(
        {length: N}, () => new Array()
    )
    let longestSubset: number[] = [];

    for (let i = 0; i < N; i++) {
        for (let j = i; j >= 0; j--) {
            if (nums[i] % nums[j] === 0 && dp[j].length + 1 > dp[i].length) {
                dp[i] = [...dp[j], nums[i]];
            }
        }
        if (dp[i].length > longestSubset.length) {
            longestSubset = dp[i];
        }
    }
    console.log(longestSubset);
    return longestSubset;
};

largestDivisibleSubset([1,2,3]);
largestDivisibleSubset([1,2,4,8]);
largestDivisibleSubset([3,4,6,8,12,16,32]);
