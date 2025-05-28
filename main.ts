function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
    function dfs(
        node: number,
        parent: number,
        children: number[][],
        k: number,
    ): number {
        if (k < 0) {
            return 0;
        }
        let res = 1;
        for (const child of children[node]) {
            if (child === parent) {
                continue;
            }
            res += dfs(child, node, children, k - 1);
        }
        return res;
    }

    function build(edges: number[][], k: number): number[] {
        const n = edges.length + 1;
        const children: number[][] = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            children[u].push(v);
            children[v].push(u);
        }
        const res: number[] = Array(n);
        for (let i = 0; i < n; i++) {
            res[i] = dfs(i, -1, children, k);
        }
        return res;
    }

    const n = edges1.length + 1;
    const count1 = build(edges1, k);
    const count2 = build(edges2, k - 1);
    const maxCount2 = Math.max(...count2);
    const res: number[] = Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = count1[i] + maxCount2;
    }
    console.log(res);
    return res;
};

maxTargetNodes(
    [[0,1],[0,2],[2,3],[2,4]],
    [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]],
    2
);
maxTargetNodes(
    [[0,1],[0,2],[0,3],[0,4]],
    [[0,1],[1,2],[2,3]],
    1
);
