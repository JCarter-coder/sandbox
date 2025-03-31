function putMarbles(weights: number[], k: number): number {
    let N: number = weights.length;
    const pairWeights: number[] = new Array(N - 1);

    for (let i = 0; i < N - 1; i++) {
        pairWeights[i] = weights[i] + weights[i + 1];
    }
    pairWeights.sort((a,b) => a - b);

    let answer = 0;
    for (let i = 0; i < k - 1; i++) {
        answer += pairWeights[N - 2 - i] - pairWeights[i];
    }

    console.log(answer);
    return answer;
};

putMarbles([1,3,5,1],2);
putMarbles([1,3],2);
putMarbles([54,6,34,66,63,52,39,62,46,75,28,65,18,37,18,13,33,69,19,40,13,10,43,61,72],4);
