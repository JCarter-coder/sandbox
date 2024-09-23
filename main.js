/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    let n = s.length;
    let dictSet = new Set(dictionary);
    let dp = new Array(n + 1).fill(0);

    for (let start = n - 1; start >= 0; start--) {
        dp[start] = dp[start + 1] + 1;
        for (let end = start; end < n; end++) {
            const substring = s.slice(start, end + 1);
            if (dictSet.has(substring)) {
                dp[start] = Math.min(dp[start], dp[end + 1]);
            }
        }
    }

    console.log(dp[0]);
};

minExtraChar("leetscode",["leet","code","leetcode"]);
minExtraChar("sayhelloworld",["hello","world"]);
