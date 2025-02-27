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
 

class FindElements {
    seen;

    constructor(root: TreeNode) {
        this.seen = new Set();
        this.dfs(root, 0);
    }

    find(target: number): boolean {
        return this.seen.has(target);
    }

    private dfs(currentNode: TreeNode | null, currentValue: number): void {
        if (currentNode === null) return;
        this.seen.add(currentValue);
        this.dfs(currentNode.left, currentValue * 2 + 1);
        this.dfs(currentNode.right, currentValue * 2 + 2);
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

