class FenwickTree {
    private tree: number[];

    constructor(size: number) {
        this.tree = new Array(size + 1).fill(0);
    }

    update(index: number, delta: number): void {
        index++;
        while (index < this.tree.length) {
            this.tree[index] += delta;
            index += index & -index;
        }
    }

    query(index: number): number {
        index++;
        let result = 0;
        while (index > 0) {
            result += this.tree[index];
            index -= index & -index;
        }
        return result;
    }
}

function goodTriplets(nums1: number[], nums2: number[]): number {
    const N = nums1.length;
    const pos2 = new Array(N);
    const reversedIndexMapping = new Array(N);
    for (let i = 0; i < N; i++) {
        pos2[nums2[i]] = i;
    }
    for (let i = 0; i < N; i++) {
        reversedIndexMapping[pos2[nums1[i]]] = i;
    }
    const tree = new FenwickTree(N);
    let result = 0;
    for (let value = 0; value < N; value++) {
        const pos = reversedIndexMapping[value];
        const left = tree.query(pos);
        tree.update(pos, 1);
        const right = N - 1 - pos - (value - left);
        result += left * right;
    }
    console.log(result);
    return result;
};

goodTriplets([2,0,1,3],[0,1,2,3]);
goodTriplets([4,0,1,3,2],[4,1,0,2,3]);
