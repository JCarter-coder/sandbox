function queryResults(limit: number, queries: number[][]): number[] {
    const N: number = queries.length;
    const result: number[] = new Array(N);
    const colorMap = new Map();
    const ballMap = new Map();

    for (let i = 0; i < N; i++) {
        let ball = queries[i][0];
        let color = queries[i][1];

        if (ballMap.has(ball)) {
            let prevColor = ballMap.get(ball);
            colorMap.set(prevColor, colorMap.get(prevColor) - 1);

            if (colorMap.get(prevColor) === 0) {
                colorMap.delete(prevColor);
            }
        }

        ballMap.set(ball, color);

        colorMap.set(color, (colorMap.get(color) || 0) + 1);

        result[i] = colorMap.size;
    }

    console.log(result);
    return result;
};

queryResults(4,[[1,4],[2,5],[1,3],[3,4]]);
queryResults(4,[[0,1],[1,2],[2,2],[3,4],[4,5]]);
queryResults(1,[[0,1],[0,4],[0,4],[0,1],[1,2]])
