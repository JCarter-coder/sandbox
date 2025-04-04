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

const dfs = (root: TreeNode | null): [number, TreeNode | null] => {
    if (!root) {
        return [0, null];
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    if (left[0] > right[0]) {
        return [left[0] + 1, left[1]];
    }
    if (left[0] < right[0]) {
        return [right[0] + 1, right[1]];
    }
    return [left[0] + 1, root];
}

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    let result = dfs(root)[1];
    console.log(result);
    return result;
};

lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4]);
lcaDeepestLeaves([1]);
lcaDeepestLeaves([0,1,3,null,2]);
