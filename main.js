function eventualSafeNodes(graph) {
    const N = graph.length;
    let visit = new Array(N).fill(false);
    let inStack = new Array(N).fill(false);
    const dfs = (node, adj, visit, inStack) => {
        if (inStack[node])
            return true;
        if (visit[node])
            return false;
        visit[node] = true;
        inStack[node] = true;
        for (let neighbor of adj[node]) {
            if (dfs(neighbor, adj, visit, inStack))
                return true;
        }
        inStack[node] = false;
        return false;
    };
    for (let i = 0; i < N; i++) {
        dfs(i, graph, visit, inStack);
    }
    const safeNodes = new Array();
    for (let i = 0; i < N; i++) {
        if (!inStack[i])
            safeNodes.push(i);
    }
    console.log(safeNodes);
    return safeNodes;
}
;
eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]);
eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]);
export {};
