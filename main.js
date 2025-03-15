"use strict";
function canPermutePalindrome(s) {
    const dp = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        dp[s.charCodeAt(i) - 97]++;
    }
    let oddCharCount = 0;
    let evenCharCount = 0;
    dp.forEach((charCount) => {
        charCount % 2 === 1 ? oddCharCount++ : evenCharCount++;
    });
    console.log(dp);
    console.log(oddCharCount);
    console.log(evenCharCount);
    return false;
}
;
canPermutePalindrome("code");
canPermutePalindrome("aab");
canPermutePalindrome("carerac");
