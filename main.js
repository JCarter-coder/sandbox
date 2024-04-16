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

var insert = function(val, node, depth, n) {
    if (node === null) {
        return;
    }
    if (depth === n - 1) {
        let t = node.left;
        node.left = new TreeNode(val);
        node.left.left = t;
        t = node.right;
        node.right = new TreeNode(val);
        node.right.right = t;
    } else {
        insert(val, node.left, depth + 1, n);
        insert(val, node.right, depth + 1, n);
    }
}

var addOneRow = function(root, val, depth) {
    // setup of tree;
    let tree = new BinaryTree();
    tree.insertLevelOrder(root);

    let newRoot = tree.root;
    
    if (depth === 1) {
        let n = new TreeNode(val);
        n.left = newRoot; //change to root
        console.log(n);
        return n;
    }

    insert(val, newRoot, 1, depth);
    console.log(newRoot);
    return newRoot;
};

addOneRow([4,2,6,3,1,5], 1, 2);
addOneRow([4,2,null,3,1], 1, 3);
