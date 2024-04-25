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

var longestIdealString = function(s, k) {
    let n = s.length;
    let dp = new Array(26);
    dp.fill(0);
    let result = 0;
    
    //updating dp with the i-th character
    for (let i = 0; i < n; i++) {
        let curr = s.charCodeAt(i) - 97;
        let best = 0;
        for (let prev = 0; prev < 26; prev++) {
            if (Math.abs(prev - curr) <= k) {
                best = Math.max(best, dp[prev]);
            }
        }
        
        // appending s[i] to the previous longest
        // ideal subsequence allowed
        dp[curr] = Math.max(dp[curr], best + 1);
        result = Math.max(result, dp[curr]);
    }

    console.log(result);
    return result;
};

longestIdealString("acfgbd",2);
longestIdealString("abcd",3);
