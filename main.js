"use strict";
function climbStairs(n) {
    if (n === 1) {
        console.log(1);
        return 1;
    }
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log(dp[n]);
    return dp[n];
}
;
climbStairs(2);
climbStairs(3);
