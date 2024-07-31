var probabilityOfHeads = function(prob, target) {
    let N = prob.length;
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= N; i++) {
        for (let j = target; j >= 1; j--) {
            dp[j] = dp[j - 1] * prob[i - 1] + dp[j] * (1 - prob[i - 1]);
        }
        dp[0] = dp[0] * (1 - prob[i - 1]);
    }

    console.log(dp[target]);
};

probabilityOfHeads([0.4],1);
probabilityOfHeads([0.5,0.5,0.5,0.5,0.5],0);
