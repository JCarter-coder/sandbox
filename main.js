"use strict";
function numWays(words, target) {
    let wordLength = words[0].length;
    let targetLength = target.length;
    const MOD = 1000000007;
    // Step 1: Calculate freq of each char at every "words" index
    const charFrequency = new Array(wordLength);
    for (let i = 0; i < charFrequency.length; i++) {
        charFrequency[i] = new Array(26).fill(0);
    }
    for (let word of words) {
        for (let j = 0; j < wordLength; ++j) {
            charFrequency[j][word.charCodeAt(j) - 97]++;
        }
    }
    // Step 2: Initialize a dp table
    const dp = new Array(wordLength + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(targetLength + 1).fill(0);
    }
    // Base case: one way to form an empty target string
    for (let currWord = 0; currWord <= wordLength; ++currWord) {
        dp[currWord][0] = 1;
    }
    // Step 3: Fill the dp table
    for (let currWord = 1; currWord <= wordLength; ++currWord) {
        for (let currTarget = 1; currTarget <= targetLength; ++currTarget) {
            dp[currWord][currTarget] = dp[currWord - 1][currTarget];
            let currPos = target.charCodeAt(currTarget - 1) - 97;
            dp[currWord][currTarget] += (charFrequency[currWord - 1][currPos] *
                dp[currWord - 1][currTarget - 1]) % MOD;
            dp[currWord][currTarget] %= MOD;
        }
    }
    // Step 4: The result is in dp[wordLength][targetLength]
    console.log(dp[wordLength][targetLength]);
    return dp[wordLength][targetLength];
}
;
numWays(["acca", "bbbb", "caca"], "aba");
numWays(["abba", "baab"], "bab");
