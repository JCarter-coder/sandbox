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

var wonderfulSubstrings = function(word) {
    let N = word.length;

    // create the frequency map
    // key = bitmask, value = frequency of bitmask key
    let freq = new Map();

    // the empty prefix can be the smaller prefix,
    // which is handled like this
    freq.set(0,1);

    let mask = 0;
    let res = BigInt(0);
    for (let i = 0; i < N; i++) {
        let bit = word.charCodeAt(i) - 97;

        // flip the parity of the i-th bit in the
        // running prefix mask
        mask ^= (1 << bit);
        
        // count smaller prefixes that create substrings
        // with no odd occurring letters
        let tempPrefix = BigInt(freq.get(mask) ? freq.get(mask) : 0)
        res += tempPrefix;

        // increment value associated with mask by 1
        // note: BigInt(1) = 1n
        freq.set(mask, tempPrefix + 1n)
        
        // loop through every possible letter that can
        // appear an odd number of times in a substring
        for (let odd_c = 0; odd_c < 10; odd_c++) {
            res += BigInt(freq.get(mask ^ (1 << odd_c)) ? 
                freq.get(mask ^ (1 << odd_c)) : 0);
        }
    }
    console.log(parseInt(res.toString()));
    return res;
};

wonderfulSubstrings("aba");
wonderfulSubstrings("aabb");
wonderfulSubstrings("he");
