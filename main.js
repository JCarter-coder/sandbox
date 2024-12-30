"use strict";
function countGoodStrings(low, high, zero, one) {
    const MOD = 1000000007;
    const dp = new Array(high + 1).fill(0);
    dp[0] = 1;
    for (let end = 1; end <= high; ++end) {
        if (end >= zero) {
            dp[end] += dp[end - zero];
        }
        if (end >= one) {
            dp[end] += dp[end - one];
        }
        dp[end] %= MOD;
    }
    let result = 0;
    for (let i = low; i <= high; ++i) {
        result += dp[i];
        result %= MOD;
    }
    console.log(result);
    return result;
}
;
countGoodStrings(3, 3, 1, 1);
countGoodStrings(2, 3, 1, 2);
