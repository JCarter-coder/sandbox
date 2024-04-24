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
    let dp = new Map([
        [0, 0],
        [1, 1],
        [2, 1]
    ]);

    var dfs = function(i) {
        if (dp.has(i)) {
            let result = dp.get(i);
            return result;
        }
        let answer = dfs(i - 1) + dfs(i - 2) + dfs(i - 3);
        dp.set(i, answer);
        return answer;
    }

    return dfs(n);
};

//tribonacci(4);
//tribonacci(25);
console.log(tribonacci(4));
console.log(tribonacci(25));