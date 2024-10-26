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
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
    const maxHeightAfterRemoval = [];
    let currentMaxHeight = 0;

    let traverseLeftToRight = (node, currentHeight) => {
        if (node === null) return;

        maxHeightAfterRemoval[node.val] = currentMaxHeight;
        currentMaxHeight = Math.max(currentMaxHeight, currentHeight);
        traverseLeftToRight(node.left, currentHeight + 1);
        traverseLeftToRight(node.right, currentHeight + 1);
    }

    let traverseRightToLeft = (node, currentHeight) => {
        if (node === null) return;

        maxHeightAfterRemoval[node.val] = Math.max(
            maxHeightAfterRemoval[node.val],
            currentMaxHeight
        );
        currentMaxHeight = Math.max(currentMaxHeight, currentHeight);
        traverseRightToLeft(node.right, currentHeight + 1);
        traverseRightToLeft(node.left, currentHeight + 1);
    }

    traverseLeftToRight(root, 0);
    currentMaxHeight = 0;
    traverseRightToLeft(root, 0);

    let queryCount = queries.length;
    let queryResults = [];
    for (let i = 0; i < queryCount; i++) {
        queryResults.push(maxHeightAfterRemoval[queries[i]]);
    }

    return queryResults;
};

treeQueries([1,3,4,2,null,6,5,null,null,null,null,null,7],[4]);
treeQueries([5,8,9,2,1,3,7,4,6],[3,2,4,8]);
