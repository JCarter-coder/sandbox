function maxScoreSightseeingPair(values: number[]): number {
    let N = values.length;
    let maxLeftScore: number = values[0];
    let maxScore = 0;

    for (let i = 1; i < N; i++) {
        let currentRightScore: number = values[i] - i;
        maxScore = Math.max(maxScore, maxLeftScore + currentRightScore);
        let currentLeftScore = values[i] + i;
        maxLeftScore = Math.max(maxLeftScore, currentLeftScore);
    }

    console.log(maxScore);
    return maxScore;
};

maxScoreSightseeingPair([8,1,5,2,6]);
maxScoreSightseeingPair([1,2]);
