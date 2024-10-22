/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    if (!root) return -1;

    let res = [];
    let q = [root];

    while (q.length > 0) {
        let n = q.length;
        let sum = 0;

        for (let i = 0; i < n; i++) {
            let node = q.shift();
            sum += node.val;

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(sum);
    }

    if (k > res.length) return -1;
    res.sort((a,b) => b - a);
    return res[k - 1];
};

kthLargestLevelSum([5,8,9,2,1,3,7,4,6],2);
kthLargestLevelSum([1,2,null,3],1);
