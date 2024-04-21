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

var validPath = function(n, edges, source, destination) {
    let graph = [];

    for (let edge of edges) {
        if (!graph[edge[0]]) {
            graph[edge[0]] = [];
            graph[edge[0]].push(edge[1]);
        } else graph[edge[0]].push(edge[1]);
        if (!graph[edge[1]]) {
            graph[edge[1]] = [];
            graph[edge[1]].push(edge[0]);
        } else graph[edge[1]].push(edge[0]);
    }

    let seen = new Array(n);
    seen.fill(false);

    var dfs = function(currNode) {
        if (currNode === destination) {
            return true;
        }
        if (!seen[currNode]) {
            seen[currNode] = true;
            for (let nextNode of graph[currNode]) {
                if (dfs(nextNode)) {
                    return true;
                }
            }
        }
        return false;
    }
    console.log(dfs(source));
    return dfs(source);
};

validPath(3,[[0,1],[1,2],[2,0]],0,2);
validPath(6,[[0,1],[0,2],[3,5],[5,4],[4,3]],0,5);
