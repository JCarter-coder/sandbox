"use strict";
function mostProfitablePath(edges, bob, amount) {
    let graph = {};
    let parents = {};
    const parenting = (val) => {
        if (!graph[val] || visisted.has(val)) {
            return;
        }
        visisted.add(val);
        for (let child of graph[val]) {
            if (visisted.has(child)) {
                continue;
            }
            parents[child] = val;
            parenting(child);
        }
    };
    const dfs = (alice, bob, profit) => {
        if (!graph[alice]) {
            return;
        }
        let income = 0;
        if (!bobVisited.has(alice)) {
            income = alice === bob ? amount[alice] / 2 : amount[alice];
        }
        profit += income;
        let hasChild = (graph[alice].length - 1) > 0 || alice === 0;
        if (!hasChild) {
            answer = Math.max(answer, profit);
            return;
        }
        bobVisited.add(bob);
        for (let child of graph[alice]) {
            if (child === parents[alice])
                continue;
            dfs(child, parents[bob] ?? 0, profit);
        }
        bobVisited.delete(bob);
    };
    for (let [parent, child] of edges) {
        if (graph[parent]) {
            graph[parent].push(child);
        }
        else {
            graph[parent] = [child];
        }
        if (graph[child]) {
            graph[child].push(parent);
        }
        else {
            graph[child] = [parent];
        }
    }
    let visisted = new Set();
    parenting(0);
    let answer = Number.MIN_SAFE_INTEGER;
    let bobVisited = new Set();
    dfs(0, bob, 0);
    console.log(answer);
    return answer;
}
;
mostProfitablePath([[0, 1], [1, 2], [1, 3], [3, 4]], 3, [-2, 4, 2, -4, 6]);
mostProfitablePath([[0, 1]], 1, [-7280, 2350]);
