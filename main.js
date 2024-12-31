
//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let nodesFound = false;

    const dfs = (node, p, q) => {
        if (node === null) return null;

        let left = dfs(node.left, p, q);
        let right = dfs(node.right, p, q);

        let conditions = 0;
        if (node === p || node === q) conditions++;
        if (left !== null) conditions++;
        if (right !== null) conditions++;
        if (conditions === 2) nodesFound = true;

        if (
            (left !== null && right !== null) ||
            node === p ||
            node === q
        ) return node;

        return left !== null ? left : right;
    }

    let ans = dfs(root, p, q);
    return nodesFound ? ans : null;
};

lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4],5,1);
lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4],5,4);
lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4],5,10);
