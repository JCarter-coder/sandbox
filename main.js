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

var tribonacci = function(n) {
    let sequence = {};
    let i;

    for (i = 0; i <= n; i++) {
        if (i === 0) {
            sequence[i] = 0;
        } else if (i === 1) {
            sequence[i] = 1;
        } else if (i === 2) {
            sequence[i] = 1;
        } else {
            sequence[i] = sequence[i - 3] + sequence[i - 2] + sequence[i - 1]
        }
    }
    console.log(sequence[i-1]);
};

tribonacci(4);
tribonacci(25);
