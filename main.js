var longestRepeatingSubstring = function(s) {
    let N = s.length;
    const dp = [];
    for (let i = 0; i <= N; i++) {
        dp.push(new Array(N + 1).fill(0));
    }
    let maxLength = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = i + 1; j <= N; j++) {
            if (s.charAt(i - 1) === s.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                maxLength = Math.max(maxLength, dp[i][j]);
            }
        }
    }
    
    console.log(maxLength);
};

longestRepeatingSubstring("abcd");
longestRepeatingSubstring("abbaba");
longestRepeatingSubstring("aabcaabdaab");
