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

function largestValues(root: TreeNode | null): number[] {
    const ans = new Array();

    const dfs = (
        node: TreeNode,
        depth: number
    ): void => {
        if (node === null) return;

        if (depth === ans.length) ans.push(node.val);
        else ans[depth] = Math.max(ans[depth], node.val);

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 0);
    return ans;
};

largestValues([1,3,2,5,3,null,9]);
largestValues([1,2,3]);
