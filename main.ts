function numEquivDominoPairs(dominoes: number[][]): number {
    let result = 0;
    const num: number[] = new Array(100).fill(0);
    for (let domino of dominoes) {
        let val = (
            domino[0] < domino[1] ? 
            domino[0] * 10 + domino[1] :
            domino[1] * 10 + domino[0]
        );
        result += num[val];
        num[val]++;
    }
    console.log(result);
    return result;
};

numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]);
numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]]);
