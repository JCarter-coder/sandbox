
//Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function minimumOperations(root: TreeNode | null): number {
    if (!root) return 0;

    const calculateMinSwaps = (arr: number[]): number => {
        const N = arr.length;
        const sorted = [...arr].map((val, index) => 
            [val, index]).sort((a,b) => a[0] - b[0]);
        const visited = new Array(N).fill(false);
        let swaps = 0;

        for (let i = 0; i < N; i++) {
            if (visited[i] || sorted[i][1] === 1) continue;
            
            let cycleSize = 0;
            let j = i;
            while (!visited[j]) {
                visited[j] = true;
                j = sorted[j][1];
                cycleSize++;
            }
            swaps += cycleSize - 1;
        }

        return swaps;
    }

    const queue: TreeNode[] = [root];
    let totalSwaps = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            levelValues.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        totalSwaps += calculateMinSwaps(levelValues);
    }

    console.log(totalSwaps);
    return totalSwaps;
};

minimumOperations([1,4,3,7,6,8,5,null,null,null,null,9,null,10]);
minimumOperations([1,3,2,7,6,5,4]);
minimumOperations([1,2,3,4,5,6]);
