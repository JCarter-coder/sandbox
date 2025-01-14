function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const N: number = A.length;
    const freq: number[] = new Array(N+1).fill(0);

    const result: number[] = new Array();
    let count: number = 0;
    
    for (let i = 0; i < N; i++) {
        freq[A[i]]++;
        freq[B[i]]++;
        console.log(freq);

        if (freq[A[i]] === 2) count++;
        if (
            freq[B[i]] === 2 &&
            B[i] !== A[i]
        ) count++;
        result.push(count);
    }

    console.log(result);
    return result;
};

findThePrefixCommonArray([1,3,2,4],[3,1,2,4]); // [0,2,3,4]
findThePrefixCommonArray([2,3,1],[3,1,2]); // [0,1,3]
