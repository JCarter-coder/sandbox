/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    let checkPath = (node, head) => {
        if (node == null) return false;
        if (dfs(node, head)) return true;
        return checkPath(node.left, head) || checkPath(node.right, head);
    }

    let dfs = (node, head) => {
        if (head == null) return true;
        if (node == null) return false;
        if (node.val != head.val) return false;
        return dfs(node.left, head.next) || dfs(node.right, head.next);
    }
    
    if (root == null) return false;
    return checkPath(root, head);
};

isSubPath([4,2,8],[1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]);
isSubPath([1,4,2,6],[1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]);
isSubPath([1,4,2,6,8],[1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]);
