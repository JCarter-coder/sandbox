"use strict";
function countPrefixSuffixPairs(words) {
    function isPrefixAndSuffix(str1, str2) {
        let n = str1.length;
        if (str2.substring(0, n) === str1 &&
            str2.substring(str2.length - n) === str1)
            return true;
        return false;
    }
    let result = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j]))
                result++;
        }
    }
    console.log(result);
    return result;
}
;
countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]);
countPrefixSuffixPairs(["pa", "papa", "ma", "mama"]);
countPrefixSuffixPairs(["abab", "ab"]);
