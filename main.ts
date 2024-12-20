// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/* class Tree {
    root: TreeNode | null;
    constructor(array?: number[]) {
        this.root = 
    }
} */

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    function traverseDFS (
        leftChild: TreeNode,
        rightChild: TreeNode,
        level: number
    ): void {
        if (leftChild === null || rightChild === null) return;

        if (level % 2 === 0) {
            let temp: number = leftChild.val;
            leftChild.val = rightChild.val;
            rightChild.val = temp;
        }

        traverseDFS(leftChild.left, rightChild.right, level + 1);
        traverseDFS(leftChild.right, rightChild.left, level + 1);
    }
    
    traverseDFS(root.left, root.right, 0);
    return root;
};

/* let tree1 = [2,3,5,8,13,21,34];
let tree2 = [7,13,11];
let tree3 = [0,1,2,0,0,0,0,1,1,1,1,2,2,2,2];
reverseOddLevels(tree1);
reverseOddLevels(tree2);
reverseOddLevels(tree3);
 */