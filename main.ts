class UnionFind {
    private parent: number[];
    private size: number[];

    constructor(n: number) {
        this.parent = new Array(n);
        this.size = new Array(n);
        for (let node = 0; node < n; node++) {
            this.parent[node] = node;
            this.size[node] = 1;
        }
    }

    find(A: number): number {
        let root = A;
        while (this.parent[root] !== root) {
            root = this.parent[root];
        }
        while (A !== root) {
            let oldRoot = this.parent[A];
            this.parent[A] = root;
            A = oldRoot;
        }
        return root;
    }

    union(A: number, B: number): boolean {
        let rootA = this.find(A);
        let rootB = this.find(B);

        if (rootA === rootB) return false;

        if (this.size[rootA] < this.size[rootB]) {
            this.parent[rootA] = rootB;
            this.size[rootB] += this.size[rootA];
        } else {
            this.parent[rootB] = rootA;
            this.size[rootA] += this.size[rootB];
        }
        return true;
    }
}

function validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) {
        console.log(false);
        return false;
    }

    const unionFind = new UnionFind(n);

    for (let edge of edges) {
        let A = edge[0];
        let B = edge[1];
        if (!unionFind.union(A, B)) {
            console.log(false);
            return false;
        }
    }

    console.log(true);
    return true;
};

validTree(5,[[0,1],[0,2],[0,3],[1,4]]);
validTree(5,[[0,1],[1,2],[2,3],[1,3],[1,4]]);
