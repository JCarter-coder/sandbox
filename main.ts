class UnionFind {
    parent: number[];
    size: number[];

    constructor(n: number) {
        this.parent = new Array(n).fill(-1);
        this.size = new Array(n).fill(1);
    }

    find(node: number): number {
        if (this.parent[node] === -1) {
            return node;
        }
        return this.parent[node] = this.find(this.parent[node]);
    }

    union(node1: number, node2: number): void {
        let root1 = this.find(node1);
        let root2 = this.find(node2);

        if (root1 === root2) return;

        if (this.size[root1] > this.size[root2]) {
            this.parent[root2] = root1;
            this.size[root1] += this.size[root2];
        } else {
            this.parent[root1] = root2;
            this.size[root2] += this.size[root1];
        }
    }
}

function countCompleteComponents(n: number, edges: number[][]): number {
    const dsu: UnionFind = new UnionFind(n);
    const edgeCount = new Map();

    for (let edge of edges) {
        dsu.union(edge[0], edge[1]);
    }

    for (let edge of edges) {
        let root = dsu.find(edge[0]);
        edgeCount.set(root, (edgeCount.get(root) || 0) + 1);
    }

    let completeCount = 0;
    for (let vertex = 0; vertex < n; vertex++) {
        if (dsu.find(vertex) === vertex) {
            let nodeCount = dsu.size[vertex];
            let expectedEdges = Math.floor(
                nodeCount * (nodeCount - 1) / 2
            );
            if ((edgeCount.get(vertex) || 0) === expectedEdges) {
                completeCount++;
            }
        }
    }

    console.log(completeCount);
    return completeCount;
};

countCompleteComponents(6,[[0,1],[0,2],[1,2],[3,4]]);
countCompleteComponents(6,[[0,1],[0,2],[1,2],[3,4],[3,5]]);
