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

var findRotateSteps = function(ring, key) {
    let ringLen = ring.length;
    let keyLen = key.length;
    let curr = new Array(ringLen);
    let prev = new Array(ringLen);
    prev.fill(0);

    var countSteps = function(curr, next, ringLength) {
        let stepsBetween = Math.abs(curr - next);
        let stepsAround = ringLength - stepsBetween;
        return Math.min(stepsBetween, stepsAround);
    }

    // for each occurrence of the character at key_index
    // of key in ring. Stores minimum steps to the character
    // from ringIndex of ring
    for (let keyIndex = keyLen - 1; keyIndex >= 0; keyIndex--) {
        curr.fill(Number.MAX_SAFE_INTEGER);
        for (let ringIndex = 0; ringIndex < ringLen; ringIndex++) {
            for (let charIndex = 0; charIndex < ringLen; charIndex++) {
                if (ring.charAt(charIndex) === key.charAt(keyIndex)) {
                    curr[ringIndex] = Math.min(curr[ringIndex],
                        (1 + countSteps(ringIndex, charIndex, ringLen) +
                        prev[charIndex]));
                }
            }
        }
        prev = Array.from(curr);
    }
    console.log(prev[0]);
    return prev[0];
};

findRotateSteps("godding","gd");
findRotateSteps("godding","godding");
