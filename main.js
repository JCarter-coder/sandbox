var regionsBySlashes = function(grid) {
    let N = grid.length;
    const DIRECTIONS = [[0,1],[0,-1],[1,0],[-1,0]];
    const expandedGrid = new Array();

    let floodFill = (expandedGrid, row, col) => {
        let queue = [];
        expandedGrid[row][col] = 1;
        queue.push([row, col]);

        while (queue.length !== 0) {
            let currentCell = queue.pop();
            for (let direction of DIRECTIONS) {
                let newRow = direction[0] + currentCell[0];
                let newCol = direction[1] + currentCell[1];
                if (isValidCell(expandedGrid, newRow, newCol)) {
                    expandedGrid[newRow][newCol] = 1;
                    queue.push([newRow, newCol]);
                }
            }
        }
    }

    let isValidCell = (expandedGrid, row, col) => {
        let n = expandedGrid.length;
        return (
            row >= 0 &&
            col >= 0 &&
            row < n &&
            col < n &&
            expandedGrid[row][col] == 0
        );
    }

    for (let i = 0; i < N*3; i++) {
        expandedGrid.push(new Array(N*3).fill(0))
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            let baseRow = i * 3;
            let baseCol = j * 3;
            if (grid[i].charAt(j) === '\\') {
                expandedGrid[baseRow][baseCol] = 1;
                expandedGrid[baseRow+1][baseCol+1] = 1;
                expandedGrid[baseRow+2][baseCol+2] = 1;
            } else if (grid[i].charAt(j) === '/') {
                expandedGrid[baseRow][baseCol+2] = 1;
                expandedGrid[baseRow+1][baseCol+1] = 1;
                expandedGrid[baseRow+2][baseCol] = 1;
            }
        }
    }

    let regionCount = 0;

    for (let i = 0; i < N*3; i++) {
        for (let j = 0; j < N*3; j++) {
            if (expandedGrid[i][j] === 0) {
                floodFill(expandedGrid, i, j);
                regionCount++;
            }
        }
    }
    console.log(regionCount);
};

regionsBySlashes([" /","/ "]);
regionsBySlashes([" /","  "]);
regionsBySlashes(["/\\","\\/"]);
