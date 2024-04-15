class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertLevelOrder(val) {
        if (val.length === 0) return;
        else {
            this.root = new TreeNode(val[0]);
            const queue = [this.root];
    
            let i = 1;
    
            while (queue.length > 0 && i < val.length) {
                let current = queue.shift();
    
                if (i < val.length) {
                    if (val[i] !== null) {
                        current.left = new TreeNode(val[i++]);
                        //queue.push(current.left);
                    } else i++;
                    queue.push(current.left);
                }
    
                if (i < val.length) {
                    if (val[i] !== null) {
                        current.right = new TreeNode(val[i++]);
                        //queue.push(current.right);
                    } else i++;
                    queue.push(current.right);
                }
            }
        }
    }
}



var sumOfLeftLeaves = function(root) {
    //let totalSum = 0;
    let tree = new BinaryTree();
    tree.insertLevelOrder(root);

    console.log(processSubtree(tree.root, false));
};

var processSubtree = function(subtree, isLeft) {
    if (subtree === null) {
        return 0;
    }
    if (subtree.left === null && subtree.right === null) {
        return isLeft ? subtree.val : 0;
    }
    return processSubtree(subtree.left, true) + processSubtree(subtree.right, false);
}

sumOfLeftLeaves([3,9,20,null,null,15,7]);
sumOfLeftLeaves([1]);
