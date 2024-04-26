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

var minFallingPathSum = function(grid) {
    // Minimum and second minimum column index
    let nextMin1C = -1;
    let nextMin2C = -1;

    // Minimum and second minimum value
    let nextMin1 = -1;
    let nextMin2 = -1;

    // Find the minimum and second minimum from the last row
    for (let col = 0; col < grid.length; col++) {
        if (nextMin1 === -1 || grid[grid.length - 1][col] <= nextMin1) {
            nextMin2 = nextMin1;
            nextMin2C = nextMin1C;
            nextMin1 = grid[grid.length - 1][col];
            nextMin1C = col;
        } else if (nextMin2 === -1 || grid[grid.length - 1][col] <= nextMin2) {
            nextMin2 = grid[grid.length - 1][col];
            nextMin2C = col;
        }
    }
    
    // Fill the recursive cases
    for (let row = grid.length - 2; row >= 0; row--) {
        // Minimum and second minimum column index of the current row
        let min1C = -1;
        let min2C = -1;

        // Minimum and second minimum value of current row
        let min1 = -1;
        let min2 = -1;

        for (let col = 0; col < grid.length; col++) {
            // Select minimum from valid cells of the next row
            let val;
            if (col !== nextMin1C) {
                val = grid[row][col] + nextMin1;
            } else {
                val = grid[row][col] + nextMin2;
            }

            // Save minimum and second minimum
            if (min1 === -1 || val <= min1) {
                min2 = min1;
                min2C = min1C;
                min1 = val;
                min1C = col;
            } else if (min2 === -1 || val <= min2) {
                min2 = val;
                min2C = col;
            }
        }

        // Change of row. Update nextMin1C / 2C, nextMin1 / 2
        nextMin1C = min1C;
        nextMin2C = min2C;
        nextMin1 = min1;
        nextMin2 = min2;
    }
    // Return the minimum from the first row
    console.log(nextMin1);
    return nextMin1;
};

minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]]);
minFallingPathSum([[7]]);
