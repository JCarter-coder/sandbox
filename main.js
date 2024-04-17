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
                    //if (val[i] !== null) {
                        current.left = new TreeNode(val[i++]);
                        //queue.push(current.left);
                    //} else i++;
                    queue.push(current.left);
                }
    
                if (i < val.length) {
                    //if (val[i] !== null) {
                        current.right = new TreeNode(val[i++]);
                        //queue.push(current.right);
                    //} else i++;
                    queue.push(current.right);
                }
            }
        }
    }
}



var smallestFromLeaf = function(root) {
    // setup of tree;
    let tree = new BinaryTree();
    tree.insertLevelOrder(root);

    let newRoot = tree.root;
    let smallestString = "";

    var dfs = function(newRoot, currentString) {
        // If the current node is NULL, return
        
        if (!newRoot) {
            return;
        }
    
        // Construct the current string by appending the
        // character corresponding to the node's value
        currentString = String.fromCharCode(newRoot.val + 97) + currentString;
        //console.log(currentString);
        if (newRoot.left === null && newRoot.right === null) {
            // If the current string is smaller than the result
            // or if the result is empty
            if (smallestString === "" || 
                smallestString > currentString) {
                smallestString = currentString;
            }
        }
    
        // Recursively traverse the left subtree
        if (newRoot.left !== null) {
            dfs(newRoot.left, currentString);
        }
    
        // Recursively traverse the right subtree
        if (newRoot.right !== null) {
            dfs(newRoot.right, currentString);
        }
    }

    dfs(newRoot, "");
    console.log(smallestString);
    return smallestString;
};

smallestFromLeaf([0,1,2,3,4,3,4]);
smallestFromLeaf([25,1,3,1,3,0,2]);
smallestFromLeaf([2,2,1,null,1,0,null,0]);
