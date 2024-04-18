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

var islandPerimeter = function(grid) {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;
                if (j > 0 && grid[i][j - 1] === 1) {
                    perimeter--;
                }
                if (i > 0 && grid[i - 1][j] === 1) {
                    perimeter--;
                }
                if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
                    perimeter--;
                }
                if (i < grid.length - 1 && grid[i + 1][j] === 1) {
                    perimeter--;
                }
            } else continue;
        }
    }
    console.log(perimeter);
};

islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]);
islandPerimeter([[1]]);
islandPerimeter([[1,0]]);
