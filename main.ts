function vowelStrings(words: string[], queries: number[][]): number[] {
    const vowels = new Set(['a','e','i','o','u']);
    const result: number[] = new Array(queries.length);
    const prefixSum: number[] = new Array(words.length);
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
        let currentWord: string = words[i];
        if (
            vowels.has(currentWord.charAt(0)) &&
            vowels.has(currentWord.charAt(currentWord.length - 1))
        ) sum++;
        prefixSum[i] = sum;
    }

    for (let i = 0; i < queries.length; i++) {
        let currentQuery: number[] = queries[i];
        result[i] = prefixSum[currentQuery[1]] - 
            (currentQuery[0] === 0 ? 
                0 : 
                prefixSum[currentQuery[0] - 1]
            ); 
    }

    console.log(result);
    return result;
};

vowelStrings(["aba","bcb","ece","aa","e"],[[0,2],[1,4],[1,1]]);
vowelStrings(["a","e","i"],[[0,2],[0,1],[2,2]]);
