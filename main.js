class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var createBinaryTree = function(descriptions) {
    const nodes = {};
    let isChild = new Set();

    // Create all nodes
    for (let [ parentVal, childVal, isLeft ] of descriptions) {
        if (!(parentVal in nodes)) nodes[parentVal] = new TreeNode(parentVal);
        if (!(childVal in nodes)) nodes[childVal] = new TreeNode(childVal);
    }

    // Set up the tree structure
    for (let [ parentVal, childVal, isLeft ] of descriptions) {
        if (isLeft === 1) nodes[parentVal].left = nodes[childVal];
        else nodes[parentVal].right = nodes[childVal];
        isChild.add(childVal);
    }

    // Identify and return the root node
    for (let [ parentVal, childVal, isLeft ] of descriptions) {
        if (!isChild.has(parentVal)) return nodes[parentVal];
    }

    return null;
};

createBinaryTree([[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]);
createBinaryTree([[1,2,1],[2,3,0],[3,4,1]]);
