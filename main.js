"use strict";
function minimumCost(n, edges, query) {
    const parent = new Array(n).fill(-1);
    const depth = new Array(n);
    const componentCost = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    const find = (node) => {
        if (parent[node] === -1)
            return node;
        return parent[node] = find(parent[node]);
    };
    const union = (node1, node2) => {
        let root1 = find(node1);
        let root2 = find(node2);
        if (root1 === root2)
            return;
        if (depth[root1] < depth[root2]) {
            let temp = root1;
            root1 = root2;
            root2 = temp;
        }
        parent[root2] = root1;
        if (depth[root1] === depth[root2]) {
            depth[root1]++;
        }
    };
    for (let edge of edges) {
        union(edge[0], edge[1]);
    }
    for (let edge of edges) {
        let root = find(edge[0]);
        componentCost[root] &= edge[2];
    }
    const answer = new Array(query.length);
    for (let i = 0; i < query.length; i++) {
        let start = query[i][0];
        let end = query[i][1];
        if (find(start) !== find(end)) {
            answer[i] = -1;
        }
        else {
            let root = find(start);
            answer[i] = componentCost[root];
        }
    }
    console.log(answer);
    return answer;
}
;
minimumCost(5, [[0, 1, 7], [1, 3, 7], [1, 2, 1]], [[0, 3], [3, 4]]);
minimumCost(3, [[0, 2, 7], [0, 1, 15], [1, 2, 6], [1, 2, 1]], [[1, 2]]);
