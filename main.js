var splitBST = function(root, target) {
    if (!root) return [null, null];

    if (root.val <= target) {
        const [lesser, greater] = splitBST(root.right, target);
        root.right = lesser;
        return [root, greater];
    } else {
        const [lesser, greater] = splitBST(root.left, target);
        root.left = greater;
        return [lesser, root];
    }
};

splitBST([4,2,6,1,3,5,7],2);
splitBST([1],1);
