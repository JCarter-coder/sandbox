function maxScore(s: string): number {
    const N: number = s.length;
    const scores: [number, number][] = new Array(N);

    for (let i = 0; i < N; i++) {
        scores[i] = [0, 0];
    }

    let numZeros: number = 0;
    let numOnes: number = 0;

    for (let left = 0; left < N - 1; left++) {
        if (s.charAt(left) === '0') numZeros++;
        if (s.charAt(N - 1 - left) === '1') numOnes++;
        scores[left][0] = numZeros;
        scores[N - 1 - left][1] = numOnes;
    }

    let maxResult: number = 0;
    console.log(...scores);

    for (let i = 0; i < scores.length - 1; i++) {
        maxResult = Math.max(maxResult, scores[i][0] + scores[i + 1][1]);
    }

    console.log(maxResult);
    return maxResult;
};

maxScore("011101");
maxScore("00111");
maxScore("1111");
maxScore("01");
