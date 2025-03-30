"use strict";
function partitionLabels(s) {
    const dp = Array.from({ length: 2 }, () => Array(26).fill(-1));
    const partitionSizes = new Array();
    let partitionStart = 0;
    let partitionEnd = 0;
    for (let i = 0; i < s.length; i++) {
        dp[1][s.charCodeAt(i) - 97] = i;
    }
    for (let i = 0; i < s.length; i++) {
        // if char's first occurance, note the start index
        if (dp[0][s.charCodeAt(i) - 97] === -1) {
            dp[0][s.charCodeAt(i) - 97] = i;
        }
        if (partitionEnd < dp[0][s.charCodeAt(i) - 97]) {
            partitionSizes.push(partitionEnd - partitionStart + 1);
            partitionStart = i;
            partitionEnd = i;
        }
        partitionEnd = Math.max(partitionEnd, dp[1][s.charCodeAt(i) - 97]);
    }
    if (partitionEnd - partitionStart + 1 > 0) {
        partitionSizes.push(partitionEnd - partitionStart + 1);
    }
    console.log(partitionSizes);
    return partitionSizes;
}
;
partitionLabels("ababcbacadefegdehijhklij");
partitionLabels("eccbbbbdec");
