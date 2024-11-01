function sameEndSubstringCount(s: string, queries: number[][]): number[] {
    let N: number = s.length;
    let charFreqPrefixSum: number[][] = new Array();
    // create array
    for (let i = 0; i < 26; i++) {
        charFreqPrefixSum.push(new Array(N).fill(0));
    }
    // fill frequency array
    for (let i = 0; i < N; i++) {
        charFreqPrefixSum[s.charCodeAt(i) - 97][i]++;
    }
    // convert to a prefix sum
    for (let i = 0; i < 26; i++) {
        for (let j = 1; j < N; j++) {
            charFreqPrefixSum[i][j] += charFreqPrefixSum[i][j - 1];
        }
    }

    let results: number[] = new Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
        let leftIndex = queries[i][0];
        let rightIndex = queries[i][1];
        let countSameEndSubstrings = 0;

        for (let charIndex = 0; charIndex < 26; charIndex++) {
            // calculate freq within query range
            let leftFreq = (leftIndex === 0)
                ? 0
                : charFreqPrefixSum[charIndex][leftIndex - 1];
            let rightFreq = charFreqPrefixSum[charIndex][rightIndex];
            let frequencyInRange = rightFreq - leftFreq;

            // calculate number of same-end substrings for this character
            countSameEndSubstrings += Math.floor((
                frequencyInRange * (frequencyInRange + 1)
            ) / 2);
        }

        results[i] = countSameEndSubstrings;
    }
    console.log(results);
    return results;
};

sameEndSubstringCount("abcaab",[[0,0],[1,4],[2,5],[0,5]]);
sameEndSubstringCount("abcd",[[0,3]]);