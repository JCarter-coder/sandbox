var findDistance = function(root, p, q) {
    function lca(node, a, b) {
        if (node == null || node.val === a || node.val === b) return node;

        let left = lca(node.left, a, b);
        let right = lca(node.right, a, b);

        if (left && right) return node;

        return left || right;
    }

    let common = lca(root, p, q);

    function findDepth(node, val, depth = 0) {
        if (node === null) return;
        if (node.val === val) return depth;

        return findDepth(node.left, val, depth+1) || findDepth(node.right, val, depth+1);
    }

    return findDepth(common, p) + findDepth(common, q);
};

findDistance([3,5,1,6,2,0,8,null,null,7,4],5,0);
findDistance([3,5,1,6,2,0,8,null,null,7,4],5,7);
findDistance([3,5,1,6,2,0,8,null,null,7,4],5,5);
