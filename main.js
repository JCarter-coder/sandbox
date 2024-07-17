function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var delNodes = function(root, to_delete) {
    let roots = [];
    let helper = function(root, isRoot) {
        if (!root) return null;
        let shouldDelete = to_delete.includes(root.val);
        if (isRoot && !shouldDelete) roots.push(root);
        root.left = helper(root.left, shouldDelete);
        root.right = helper(root.right, shouldDelete);
        return shouldDelete ? null : root;
    }
    helper(root, true);
    return roots;
};

delNodes([1,2,3,4,5,6,7],[3,5]);
delNodes([1,2,4,null,3],[3]);