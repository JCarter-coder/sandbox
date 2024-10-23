/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    let levelSums = new Map();
    let nodeValues = new Map();
    let parents = new Map();

    let dfs1 = (node, level, parent) => {
        if (node === null) return;

        nodeValues.set(node, node.val);

        if (!levelSums.has(level)) levelSums.set(level, 0);

        levelSums.set(level, node.val + levelSums.get(level));
        dfs1(node.left, level + 1, node)
        dfs1(node.right, level + 1, node);
    }

    let dfs2 = (node, level, parent) => {
        if (node === null) return;

        if (parent === null) node.val = 0;
        else {
            let sum = levelSums.get(level);
            let left = parent.left;
            let right = parent.right;

            if (left) sum -= nodeValues.get(left);

            if (right) sum -= nodeValues.get(right);

            node.val = sum;
        }

        dfs2(node.left, level + 1, node);
        dfs2(node.right, level + 1, node);
    }

    dfs1(root, 0, null);
    dfs2(root, 0, null);

    return root;
};

replaceValueInTree([5,4,9,1,10,null,7]);
replaceValueInTree([3,1,2]);
