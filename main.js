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

var findFarmland = function(land) {
    let result = [];
    // four directions to traverse
    let dirs = [[-1,0],[0,-1],[0,1],[1,0]];
    let rowVar = 0;
    let colVar = 0;

    let m = land.length;
    let n = land[0].length;
    // create an m x n array of false values
    let visited = new Array(m);
    for (let row = 0; row < m; row++) {
        visited[row] = new Array(n);
        visited[row].fill(false);
    }

    // returns true if coordinates are within the matrix boundary
    var isWithinFarm = function(x, y, N, M) {
        return x >= 0 && x < N && y >= 0 && y < M;
    }

    var dfs = function(land, visited, x, y) {
        visited[x][y] = true;
        // max x and y for the bottom right cell
        rowVar = Math.max(rowVar, x);
        colVar = Math.max(colVar, y);

        for (let dir of dirs) {
            // neighbor cell coordinates
            let newX = x + dir[0];
            let newY = y + dir[1];
            // if neighbor within matrix is farmland cell and unvisited
            if (isWithinFarm(newX, newY, m, n) && !visited[newX][newY]
                && land[newX][newY] === 1) {
                dfs(land, visited, newX, newY);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                rowVar = 0;
                colVar = 0;

                dfs(land, visited, i, j);

                result.push([i, j, rowVar, colVar]);
            }
        }
    }

    console.log(result);
    return result;
};

findFarmland([[1,0,0],[0,1,1],[0,1,1]]);
findFarmland([[1,1],[1,1]]);
findFarmland([[0]]);