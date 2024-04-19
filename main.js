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
                        current.left = new TreeNode(val[i]);
                        queue.push(current.left);
                    } 
                    i++;
                }
    
                if (i < val.length) {
                    if (val[i] !== null) {
                        current.right = new TreeNode(val[i]);
                        queue.push(current.right);
                    } 
                    i++;
                }
            }
        }
    }
}

var getLonelyNodes = function(root) {
    let tree = new BinaryTree();
    tree.insertLevelOrder(root);
    let result = [];

    var dfs = function(root, isLonely, result) {
        if (!root) {
            return;
        }
        if (isLonely) {
            result.push(root.val);
        }
        dfs(root.left, root.right === null, result);
        dfs(root.right, root.left === null, result);
    }

    dfs(tree.root, false, result);

    console.log(result);
    return result;
};

getLonelyNodes([1,2,3,null,4]);
getLonelyNodes([7,1,4,6,null,5,3,null,null,null,null,null,2]);
getLonelyNodes([11,99,88,77,null,null,66,55,null,null,44,33,null,null,22]);
