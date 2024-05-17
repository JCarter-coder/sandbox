class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// need to build out binarytree class for solution to run
/* class BinaryTree {
    constructor() {
        this.head = null;
    }

    buildTree(array) {
        for (let i = 0; i < array.length; i++) {
            if (i === 0) {
                this.head === new TreeNode(array[i]);
            }
        }
        return this.head;
    }
} */

var removeLeafNodes = function(root, target) {
    if (root === null) {
        return null;
    }

    root.left = removeLeafNodes(root.left, target);

    root.right = removeLeafNodes(root.right, target);

    if (root.left === null && root.right === null && root.val === target) {
        return null;
    }

    return root;
};

//let tree1 = new BinaryTree([2,1,3,null,null,0,1]);
//evaluateTree(tree1);

//let tree2 = new BinaryTree().buildTree([0]);
removeLeafNodes([1,2,3,2,null,2,4],2);
removeLeafNodes([1,3,3,3,2],3);
removeLeafNodes([1,2,null,2,null,2],2);
