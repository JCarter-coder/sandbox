"use strict";
function maxScoreSightseeingPair(values) {
    let N = values.length;
    let maxLeftScore = values[0];
    let maxScore = 0;
    for (let i = 1; i < N; i++) {
        let currentRightScore = values[i] - i;
        maxScore = Math.max(maxScore, maxLeftScore + currentRightScore);
        let currentLeftScore = values[i] + 1;
        maxLeftScore = Math.max(maxLeftScore, currentLeftScore);
    }
    console.log(maxScore);
    return maxScore;
}
;
maxScoreSightseeingPair([8, 1, 5, 2, 6]);
maxScoreSightseeingPair([1, 2]);
