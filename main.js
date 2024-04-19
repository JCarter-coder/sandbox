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
                    //if (val[i] !== null) {
                        current.left = new TreeNode(val[i++]);
                        //queue.push(current.left);
                    //} else i++;
                    queue.push(current.left);
                }
    
                if (i < val.length) {
                    //if (val[i] !== null) {
                        current.right = new TreeNode(val[i++]);
                        //queue.push(current.right);
                    //} else i++;
                    queue.push(current.right);
                }
            }
        }
    }
}

var numIslands = function(grid) {
    let islands = 0;
    let nr = grid.length;
    let nc = grid[0].length;

    let dfs = function(grid, r, c){
        grid[r][c] = '0';
        if (r - 1 >= 0 && grid[r - 1][c] === '1') dfs(grid, r - 1, c);
        if (r + 1 < nr && grid[r + 1][c] === '1') dfs(grid, r + 1, c);
        if (c - 1 >= 0 && grid[r][c - 1] === '1') dfs(grid, r, c - 1);
        if (c + 1 < nc && grid[r][c + 1] === '1') dfs(grid, r, c + 1);
    }

    if (!nr) {
        console.log(0);
        return 0;
    }
    
    for (let r = 0; r < nr; ++r) {
        for (let c = 0; c < nc; ++c) {
            if (grid[r][c] === '1') {
                ++islands;
                dfs(grid, r, c);
            }
        }
    }
    
    console.log(islands);
    return islands
};

numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);
numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]);
