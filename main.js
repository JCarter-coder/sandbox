var checkRecord = function(n) {
    const MOD = 1000000007;
    // cache to store subproblem results
    const dp = new Array(n + 1).fill(null)
        .map(() => new Array(2).fill(null)
        .map(() => new Array(3).fill(0)));

    // Base case: there is a 1 string of 
    // length 0 with zero 'A' and zero 'L'
    dp[0][0][0] = 1;

    // Iterate on smaller sub-problems and use
    // the current smaller sub-problem to generate
    // results for bigger sub-problems.
    for (let len = 0; len < n; ++len) {
        for (let totalAbsences = 0; totalAbsences <= 1; ++totalAbsences) {
            for (let consecutiveLates = 0; consecutiveLates <= 2; ++consecutiveLates) {
                // Store the count when 'P' is chosen
                dp[len + 1][totalAbsences][0] = (
                    dp[len + 1][totalAbsences][0] + 
                    dp[len][totalAbsences][consecutiveLates]
                ) % MOD;
                // Store the count when 'A' is chosen
                if (totalAbsences < 1) {
                    dp[len + 1][totalAbsences + 1] [0] = (
                        dp[len + 1][totalAbsences + 1][0] +
                        dp[len][totalAbsences][consecutiveLates]
                    ) % MOD;
                }
                // Store the count when 'L' is chosen
                if (consecutiveLates < 2) {
                    dp[len + 1][totalAbsences][consecutiveLates + 1] = (
                        dp[len + 1][totalAbsences][consecutiveLates + 1] +
                        dp[len][totalAbsences][consecutiveLates]
                    ) % MOD;
                }
            }
        }
    }

    // Sum up the counts for all combinations of length 'n'
    // with different absent and late counts
    let count = 0;
    for (let totalAbsences = 0; totalAbsences <= 1; ++totalAbsences) {
        for (let consecutiveLates = 0; consecutiveLates <= 2; ++ consecutiveLates) {
            count = (count + dp[n][totalAbsences][consecutiveLates]) % MOD;
        }
    }
    console.log(count);
    return count;
};

checkRecord(2);
checkRecord(1);
checkRecord(10101);
