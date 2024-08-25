var postorderTraversal = function(root) {
    const result = [];
    const traverse = (node) => {
        if (node === null) return;

        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    };

    traverse(root);
    return result;
};

postorderTraversal([1,null,2,3]);
postorderTraversal([]);
postorderTraversal([1]);
