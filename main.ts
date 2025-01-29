class DSU {
    protected ranks: number[];
    protected roots: number[];

    constructor(N: number) {
        const roots: number[] = new Array(N);
        for (let i = 0; i < N; ++i) {
            roots[i] = i;
        }
        this.roots = roots;
        this.ranks = new Array(N).fill(0);
    }

    find(a: number): number {
        while (a !== this.roots[a]) {
            this.roots[a] = this.roots[this.roots[a]];
            a = this.roots[a];
        }
        return a;
    }

    union(a: number, b: number): boolean {
        a = this.find(a);
        b = this.find(b);
        if (a === b) {
            return false;
        }
        if (this.ranks[a] < this.ranks[b]) {
            const c = a;
            a = b;
            b = c;
        }
        this.ranks[a] += +(this.ranks[a] === this.ranks[b]);
        this.roots[b] = a;
        return true;
    }
}

function findRedundantConnection(edges: number[][]): number[] {
    const dsu = new DSU(edges.length + 1);

    let i = 0;
    while (i+1 < edges.length && dsu.union(edges[i][0], edges[i][1])) {
        ++i;
    }

    console.log(edges[i]);
    return edges[i];
};

findRedundantConnection([[1,2],[1,3],[2,3]]);
findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]);
