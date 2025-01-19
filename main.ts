function trapRainWater(heightMap: number[][]): number {
    const N = heightMap.length;
    const M = heightMap[0].length;
    const pq: [number, [number, number]][] = new Array();
    const vis: number[][] = Array.from({ length: N }, () => Array(M).fill(0));

    for (let i = 0; i < M; i++) {
        pq.push([heightMap[0][i], [0,i]]);
        pq.push([heightMap[N - 1][i], [N - 1, i]]);
        vis[0][i] = 1;
        vis[N - 1][i] = 1;
    }

    for (let i = 1; i < N - 1; i++) {
        pq.push([heightMap[i][0], [i,0]]);
        pq.push([heightMap[i][M - 1], [i, M - 1]]);
        vis[i][0] = 1;
        vis[i][M - 1] = 1;
    }

    const delRow = [-1,0,1,0];
    const delCol = [0,1,0,-1];

    let ans = 0;

    while (pq.length > 0) {
        pq.sort((a,b) => a[0] - b[0]);
        const [height, [row, col]] = pq.shift()!;

        for (let i = 0; i < 4; i++) {
            const nRow = row + delRow[i];
            const nCol = col + delCol[i];

            if (
                nRow >= 0 && 
                nCol >= 0 &&
                nRow < N &&
                nCol < M &&
                !vis[nRow][nCol]
            ) {
                ans += Math.max(height - heightMap[nRow][nCol], 0);
                pq.push([Math.max(height, heightMap[nRow][nCol]), [nRow, nCol]]);
                vis[nRow][nCol] = 1;
            }
        }
    }

    console.log(ans);
    return ans;
};

trapRainWater([[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]);
trapRainWater([[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]);
