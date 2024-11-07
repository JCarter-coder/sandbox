"use strict";
function largestCombination(candidates) {
    let maxCount = 0;
    for (let i = 0; i < 24; i++) {
        let count = 0;
        for (let num of candidates) {
            if ((num & (1 << i)) !== 0)
                count++;
        }
        maxCount = Math.max(maxCount, count);
    }
    console.log(maxCount);
    return maxCount;
}
;
largestCombination([16, 17, 71, 62, 12, 24, 14]);
largestCombination([8, 8]);
