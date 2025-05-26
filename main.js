"use strict";
function largestPathValue(colors, edges) {
    const dfs = (node, colors, adj, count, visit, inStack) => {
        if (inStack[node])
            return Number.MAX_VALUE;
        if (visit[node])
            return count[node][colors.charCodeAt(node) - 97];
        inStack[node] = true;
        visit[node] = true;
        if (adj.has(node)) {
            for (const neighbor of adj.get(node) || []) {
                if (dfs(neighbor, colors, adj, count, visit, inStack) === Number.MAX_VALUE) {
                    return Number.MAX_VALUE;
                }
                for (let i = 0; i < 26; i++) {
                    count[node][i] = Math.max(count[node][i], count[neighbor][i]);
                }
            }
        }
        count[node][colors.charCodeAt(node) - 97]++;
        inStack[node] = false;
        return count[node][colors.charCodeAt(node) - 97];
    };
    const n = colors.length;
    const adj = new Map();
    for (const [u, v] of edges) {
        if (!adj.has(u)) {
            adj.set(u, []);
        }
        adj.get(u).push(v);
    }
    const count = Array.from({ length: n }, () => Array(26).fill(0));
    const visit = Array(n).fill(false);
    const inStack = Array(n).fill(false);
    let maxCount = 0;
    for (let i = 0; i < n; i++) {
        maxCount = Math.max(maxCount, dfs(i, colors, adj, count, visit, inStack));
    }
    console.log(maxCount === Number.MAX_VALUE ? -1 : maxCount);
    return maxCount === Number.MAX_VALUE ? -1 : maxCount;
}
;
largestPathValue("abaca", [[0, 1], [0, 2], [2, 3], [3, 4]]);
largestPathValue("a", [[0, 0]]);
