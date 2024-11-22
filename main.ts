function maxEqualRowsAfterFlips(matrix: number[][]): number {
    const patternFreq = new Map();

    for (let currentRow of matrix) {
        let patternBuilder = "";

        for (let col = 0; col < currentRow.length; col++) {
            if (currentRow[0] === currentRow[col]) patternBuilder += "T";
            else patternBuilder += "F";
        }

        patternFreq.set(
            patternBuilder,
            (patternFreq.get(patternBuilder) || 0) + 1
        );
    }

    let maxFreq = 0;
    for (let freq of patternFreq.values()) {
        maxFreq = Math.max(freq, maxFreq);
    }

    console.log(maxFreq);
    return maxFreq;
};

maxEqualRowsAfterFlips([[0,1],[1,1]]);
maxEqualRowsAfterFlips([[0,1],[1,0]]);
maxEqualRowsAfterFlips([[0,0,0],[0,0,1],[1,1,0]]);
