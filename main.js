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

var findMinHeightTrees = function(n, edges) {
    // edge cases
    if (n < 2) {
        let centroids = new Array();
        for (let i = 0; i < n; i++) {
            centroids.push(i);
        }
        console.log(centroids);
        return centroids;
    }

    // build the graph with the adjacency list
    let neighbors = new Array();
    for (let i = 0; i < n; i++) {
        let hashSet = new Set();
        neighbors.push(hashSet);
    }
    for (let edge of edges) {
        let start = edge[0];
        let end = edge[1];
        neighbors[start].add(end);
        neighbors[end].add(start);
    }

    // initialize the first layer of leaves
    let leaves = new Array();
    for (let i = 0; i < n; i++) {
        if (neighbors[i].size === 1) {
            leaves.push(i);
        }
    }

    // trim the leaves until reaching the centroids
    let remainingNodes = n;
    while (remainingNodes > 2) {
        remainingNodes -= leaves.length;
        let newLeaves = new Array();

        // remove the current leaves along with the edges
        for (let leaf of leaves) {
            // the only neighbor left for the leaf node
            let iterator = neighbors[leaf].values();
            let neighbor = iterator.next().value;
            // remove the only edge left
            neighbors[neighbor].delete(leaf);
            if (neighbors[neighbor].size === 1) {
                newLeaves.push(neighbor);
            }
        }
        leaves = newLeaves;
    }
    console.log(leaves);
    return leaves;
};

findMinHeightTrees(4,[[1,0],[1,2],[1,3]]);
findMinHeightTrees(6,[[3,0],[3,1],[3,2],[3,4],[5,4]]);
findMinHeightTrees(6,[[0,1],[0,2],[0,3],[3,4],[4,5]]);
