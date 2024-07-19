var luckyNumbers  = function(matrix) {
    let N = matrix.length;
    let M = matrix[0].length;

    let rMinMax = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < N; i++) {
        let rMin = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < M; j++) {
            rMin = Math.min(rMin, matrix[i][j]);
        }
        rMinMax = Math.max(rMinMax, rMin);
    }

    let cMaxMin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < M; i++) {
        let cMax = Number.MIN_SAFE_INTEGER;
        for (let j = 0; j < N; j++) {
            cMax = Math.max(cMax, matrix[j][i]);
        }
        cMaxMin = Math.min(cMaxMin, cMax);
    }

    if (rMinMax === cMaxMin) {
        console.log(`[${rMinMax}]`);
        return [rMinMax];
    }

    console.log([]);
    return [];
};

luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]);
luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]);
luckyNumbers([[7,8],[1,2]]);
