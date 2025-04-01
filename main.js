"use strict";
function mostPoints(questions) {
    const N = questions.length;
    const dp = new Array(N);
    dp[N - 1] = questions[N - 1][0];
    for (let i = N - 2; i >= 0; --i) {
        dp[i] = questions[i][0];
        let skip = questions[i][1];
        if (i + skip + 1 < N)
            dp[i] += dp[i + skip + 1];
        dp[i] = Math.max(dp[i], dp[i + 1]);
    }
    console.log(dp[0]);
    return dp[0];
}
;
mostPoints([[3, 2], [4, 3], [4, 4], [2, 5]]);
mostPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]);
