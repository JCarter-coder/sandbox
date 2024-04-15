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



var sumNumbers = function(root) {
    // setup of tree;
    let tree = new BinaryTree();
    tree.insertLevelOrder(root);

    let rootToLeaf = 0;
    let currNumber = 0;
    let steps;
    let predecessor = new TreeNode();
    let rootNew = tree.root;

    while (rootNew !== null) {
        // If there is a left child, then compute the predecessor.
        // If there is no link predecessor.right = root --> set it.
        // If there is a link predecessor.right = root --> break it.
        if (rootNew.left !== null) {
            // Predecessor node is one step to the left
            // and then to the right till you can.
            predecessor = rootNew.left;
            steps = 1;
            while (predecessor.right !== null &&
                predecessor.right !== rootNew) {
                predecessor = predecessor.right;
                ++steps;
            }

            // Set link predecessor.right = root
            // and go to explore the left subtree
            if (predecessor.right === null) {
                currNumber = currNumber * 10 + rootNew.val;
                predecessor.right = rootNew;
                rootNew = rootNew.left;
            }
            // Break the link predecessor.right = root
            // Once the link is broken, it's time to 
            // change subtree and go to the right
            else {
                // If you're on the leaf, update the sum
                if (predecessor.left === null) {
                    rootToLeaf += currNumber;
                }
                // This part of tree is explored, backtrack
                for (let i = 0; i < steps; ++i) {
                    currNumber = Math.floor(currNumber/10);
                }
                predecessor.right = null;
                rootNew = rootNew.right;
            }
        }

        // If there is no left child then just go right.
        else {
            currNumber = currNumber * 10 + rootNew.val;
            // if you're on the leaf, update the sum
            if (rootNew.right === null) {
                rootToLeaf += currNumber;
            }
            rootNew = rootNew.right;
        }
    }
    console.log(rootToLeaf);
    return rootToLeaf;
};

sumNumbers([1,2,3]);
sumNumbers([4,9,0,5,1]);
