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

var evaluateTree = function(root) {
    // handles the case for leaf nodes
    if (root.left === null && root.right === null) {
        return root.val !== 0;
    }

    // store the evaluations for the left subtree and right subtree
    let evaluateLeftSubtree = evaluateTree(root.left);
    let evaluateRightSubtree = evaluateTree(root.right);
    let evaluateRoot;
    if (root.val === 2) {
        evaluateRoot = evaluateLeftSubtree || evaluateRightSubtree;
    } else {
        evaluateRoot = evaluateLeftSubtree && evaluateRightSubtree;
    }

    console.log(evaluateRoot);
    return evaluateRoot;
};

//let tree1 = new BinaryTree([2,1,3,null,null,0,1]);
//evaluateTree(tree1);

//let tree2 = new BinaryTree().buildTree([0]);
evaluateTree([0]);
