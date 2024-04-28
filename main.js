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

var sumOfDistancesInTree = function(n, edges) {
    let answer = new Array(n);
    let graph = new Array();
    let count = new Array(n);
    answer.fill(0);
    count.fill(1);
    
    for (let i = 0; i < n; i++) {
        let tempSet = new Set();
        graph.push(tempSet);
    }
    for (let edge of edges){
        graph[edge[0]].add(edge[1]);
        graph[edge[1]].add(edge[0]);
    }

    var dfs = function(node, parent) {
        for (let child of graph[node]) {
            if (child !== parent) {
                dfs(child, node);
                count[node] += count[child];
                answer[node] += answer[child] + count[child];
            }
        }
    }

    var dfs2 = function(node, parent) {
        for (let child of graph[node]) {
            if (child !== parent) {
                answer[child] = answer[node] - count[child] +
                    n - count[child];
                dfs2(child, node);
            }
        }
    }

    dfs(0, -1);
    dfs2(0, -1);
    console.log(answer);
    return answer;
};

sumOfDistancesInTree(6,[[0,1],[0,2],[2,3],[2,4],[2,5]]);
sumOfDistancesInTree(1,[]);
sumOfDistancesInTree(2,[[1,0]]);
