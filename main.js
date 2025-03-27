"use strict";
function minimumDistance(n, edges, s, marked) {
    const dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    dist[s] = 0;
    for (let iter = 0; iter < n - 1; iter++) {
        for (let edge of edges) {
            let from = edge[0];
            let to = edge[1];
            let weight = edge[2];
            if (dist[from] !== Number.MAX_SAFE_INTEGER &&
                dist[from] + weight < dist[to]) {
                dist[to] = dist[from] + weight;
            }
        }
    }
    let minDist = Number.MAX_SAFE_INTEGER;
    for (let node of marked) {
        if (dist[node] < minDist) {
            minDist = dist[node];
        }
    }
    let result = (minDist === Number.MAX_SAFE_INTEGER ?
        -1 :
        minDist);
    console.log(result);
    return result;
}
;
minimumDistance(4, [[0, 1, 1], [1, 2, 3], [2, 3, 2], [0, 3, 4]], 0, [2, 3]);
minimumDistance(5, [[0, 1, 2], [0, 2, 4], [1, 3, 1], [2, 3, 3], [3, 4, 2]], 1, [0, 4]);
minimumDistance(4, [[0, 1, 1], [1, 2, 3], [2, 3, 2]], 3, [0, 1]);
