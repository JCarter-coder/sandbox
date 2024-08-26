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

var postorder = function(root) {
    const result = [];

    const traverse = (root) => {
        if (root) {
            if (root.children) {
                for (let node of root.children) {
                    traverse(node);
                }
            }
            result.push(root.val);
        }
    };
    
    traverse(root);
    return result;
};

postorder([1,null,3,2,4,null,5,6]);
postorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]);

