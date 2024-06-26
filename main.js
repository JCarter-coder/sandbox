class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

var inOrder = function(root, result) {
    if (!root) return [];
    inOrder(root.left, result);
    result.push(root.val);
    inOrder(root.right, result);
    return result;
}

var createBST = function(arr, left, right) {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const tree = new TreeNode(arr[mid]);
    tree.left = createBST(arr, left, mid - 1);
    tree.right = createBST(arr, mid + 1, right);
    return tree;
}

var balanceBST = function(root) {
    const nums = inOrder(root, []);
    return createBST(nums, 0, nums.length - 1);
};

balanceBST([1,null,2,null,3,null,4]);
balanceBST([2,1,3]);
