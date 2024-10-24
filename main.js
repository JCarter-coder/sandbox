/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if (root1 === null && root2 === null) return true;

    if (root1 === null || root2 === null) return false;

    if (root1.val !== root2.val) return false;

    let noSwap = (
        flipEquiv(root1.left, root2.left) &&
        flipEquiv(root1.right, root2.right)
    );
    
    let swap = (
        flipEquiv(root1.left, root2.right) &&
        flipEquiv(root1.right, root2.left)
    );

    return noSwap || swap;
};

flipEquiv([1,2,3,4,5,6,null,null,null,7,8],[1,3,2,null,6,4,5,null,null,null,null,8,7]);
flipEquiv([],[]);
flipEquiv([],[1]);
