"use strict";
function maxDifference(s) {
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    const counts = Object.values(charCount);
    if (counts.length < 2) {
        console.log(0);
        return 0;
    }
    const evenCount = [...counts].filter((count) => count % 2 === 0);
    const oddCount = [...counts].filter((count) => count % 2 === 1);
    //const difference1 = Math.max(...evenCount) - Math.min(...oddCount);
    const difference = Math.max(...oddCount) - Math.min(...evenCount);
    //let result = Math.max(difference1, difference2);
    console.log(difference);
    return difference;
}
;
maxDifference("aaaaabbc");
maxDifference("abcabcab");
maxDifference("tzt");
