var stoneGameII = function(piles) {
    let N = piles.length;
    let dp = [];
    for (let i = 0; i <= N; i++) {
        dp.push(new Array(N + 1).fill(0));
    }

    // Store suffix sum for all possible suffix
    let suffixSum = new Array(N + 1).fill(0);
    for (let i = N - 1; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }

    // Initialize the dp array
    for (let i = 0; i <= N; i++) {
        dp[i][N] = suffixSum[i];
    }

    // Start from the last index to store the future state first
    for (let index = N - 1; index >= 0; index--) {
        for (let maxTillNow = N - 1; maxTillNow >= 1; maxTillNow--) {
            for (let X = 1; X <= 2 * maxTillNow && index + X <= N; X++) {
                dp[index][maxTillNow] = Math.max(
                    dp[index][maxTillNow],
                    suffixSum[index] - dp[index + X][Math.max(maxTillNow, X)]
                );
            }
        }
    }

    console.log(dp[0][1]);
};

stoneGameII([2,7,9,4,4]);
stoneGameII([1,2,3,4,5,100]);
