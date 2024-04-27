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

class UnionFind {

    constructor(size) {
        this.parent = new Array(size);
        this.rank = new Array(size);
        for (let i = 0; i < size; i++) {
            this.parent[i] = -1;
        }
        this.count = 0;
    }
    addLand(x) {
        if (this.parent[x] >= 0) {
            return;
        }
        this.parent[x] = x;
        this.count++;
    }

    isLand(x) {
        if (this.parent[x] >= 0) {
            return true;
        } else {
            return false;
        }
    }

    numOfIslands() {
        return this.count;
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let xset = this.find(x);
        let yset = this.find(y);
        if (xset === yset) {
            return;
        } else if (this.rank[xset] < this.rank[yset]) {
            this.parent[xset] = yset;
        } else if (this.rank[xset] > this.rank[yset]) {
            this.parent[yset] = xset;
        } else {
            this.parent[yset] = xset;
            this.rank[xset]++;
        }
        this.count--;
    }
}

var numIslands2 = function(m, n, positions) {
    let x = [-1, 1, 0, 0];
    let y = [0, 0, -1, 1];
    let dsu = new UnionFind(m * n);
    let answer = new Array();

    for (let position of positions) {
        let landPosition = position[0] * n + position[1];
        dsu.addLand(landPosition);

        for (let i = 0; i < 4; i++) {
            let neighborX = position[0] + x[i];
            let neighborY = position[1] + y[i];
            let neighborPosition = neighborX * n + neighborY;
            // if neighborX and neighborY correspond to a
            // point in the grid and there is a land at that
            // point, then merge it with the current land
            if (neighborX >= 0 && neighborX < m && neighborY >= 0 &&
                neighborY < n && dsu.isLand(neighborPosition)) {
                    dsu.union(landPosition, neighborPosition);
            }
        }
        answer.push(dsu.numOfIslands());
    }
    console.log(answer);
    return answer;
};

numIslands2(3,3,[[0,0],[0,1],[1,2],[2,1]]);
numIslands2(1,1,[[0,0]]);
numIslands2(3,3,[[0,1],[1,2],[2,1],[1,0],[0,2],[0,0],[1,1]]);
