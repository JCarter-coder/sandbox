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

var minOperations = function(nums, k) {
    let finalXor = 0;
    for (let n of nums) {
        finalXor = finalXor ^ n;
        //console.log(finalXor);
    }

    let setBits = (finalXor ^ k).toString(2).split('');
    let answer = 0;

    for (let i = 0; i < setBits.length; i++) {
        if (setBits[i] === '1') {
            answer++;
        }
    }
    
    console.log(answer);
    return answer;
};

minOperations([2,1,3,4],1);
minOperations([2,0,2,0],0);
