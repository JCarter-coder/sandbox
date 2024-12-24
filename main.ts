type graphMap = Map<number, number[]>

function minimumDiameterAfterMerge(edges1: number[][], edges2: number[][]): number {
    const getLongestPathLen = (graph: graphMap) => {
        let len = 0;
        const was = new Set<number>([0]);

        const traverse = (node: number): number => {
            const children = graph.get(node);
            let mx = -1;
            let mx2 = -1;

            if (children) {
                for (const child of children) {
                    if (was.has(child)) continue;
                    was.add(child);

                    const current = traverse(child);
                    if (current > mx) {
                        mx2 = mx;
                        mx = current;
                    } else if (current > mx2) {
                        mx2 = current;
                    }
                }

                const currentLen = Math.max(mx, 0) + Math.max(mx2, 0);
                if (currentLen > len) len = currentLen;

                return mx === -1 ? 1 : mx + 1;
            } else return 1;
        }

        traverse(0);

        return len;
    }

    const makeGraph = (edges: number[][]) => {
        const graph: graphMap = new Map();

        for (const [u, v] of edges) {
            const gu = graph.get(u);
            if (gu === undefined) graph.set(u, [v]);
            else gu.push(v);

            const gv = graph.get(v);
            if (gv === undefined) graph.set(v, [u]);
            else gv.push(u);
        }

        return graph;
    }

    const graph1 = makeGraph(edges1);
    const graph2 = makeGraph(edges2);

    const maxLen1 = getLongestPathLen(graph1);
    const maxLen2 = getLongestPathLen(graph2);

    const mergedLen = Math.ceil(maxLen1/2) + Math.ceil(maxLen2/2) + 1;

    console.log(Math.max(maxLen1, maxLen2, mergedLen));
    return Math.max(maxLen1, maxLen2, mergedLen);
};

minimumDiameterAfterMerge([
    [0,1],[0,2],[0,3]],
    [[0,1]]
);
minimumDiameterAfterMerge(
    [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]],
    [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]]
);
