/* class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
} */

var bstToGst = function(root) {
    let sum = 0;

    const traverse = (node) => {
        if (node) {
            traverse(node.right);
            sum += node.val;
            node.val = sum;
            traverse(node.left);
        }
    }

    traverse(root);
    console.log(root);
};

bstToGst([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]);
bstToGst([0,null,1]);
