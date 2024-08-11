class ArticulationPoint {
    constructor(hasArticulationPoint, time) {
        this.hasArticulationPoint = hasArticulationPoint;
        this.time = time;
    }
}

var minDays = function(grid) {
    const DIRECTIONS = [[0,1],[1,0],[0,-1],[-1,0]];
    let rows = grid.length;
    let cols = grid[0].length;
    let apInfo = new ArticulationPoint(false, 0);
    let landCells = 0;
    let islandCount = 0;

    let findArticulationPoints = (
        grid,
        row,
        col,
        discoveryTime,
        lowestReachable,
        parentCell,
        apInfo
    ) => {
        let rows = grid.length;
        let cols = grid[0].length;
        discoveryTime[row][col] = apInfo.time;
        apInfo.time++;
        lowestReachable[row][col] = discoveryTime[row][col];
        let children = 0;

        // Explore all adjacent cells
        for (let direction of DIRECTIONS) {
            let newRow = row + direction[0];
            let newCol = col + direction[1];
            if (isValidLandCell(grid, newRow, newCol)) {
                if (discoveryTime[newRow][newCol] === -1) {
                    children++;
                    parentCell[newRow][newCol] = row * cols + col;
                    findArticulationPoints(
                        grid,
                        newRow,
                        newCol,
                        discoveryTime,
                        lowestReachable,
                        parentCell,
                        apInfo
                    );

                    // Update lowest reachable time
                    lowestReachable[row][col] = Math.min(
                        lowestReachable[row][col],
                        lowestReachable[newRow][newCol]
                    );

                    // Check for articulation point condition
                    if (lowestReachable[newRow][newCol] >=
                        discoveryTime[row][col] && 
                        parentCell[row][col] !== -1
                    ) {
                        apInfo.hasArticulationPoint = true;
                    }
                } else if (newRow * cols + newCol !== parentCell[row][col]) {
                    // Update lowest reachable time for back edge
                    lowestReachable[row][col] = Math.min(
                        lowestReachable[row][col],
                        discoveryTime[newRow][newCol]
                    );
                }
            }
        }

        // Root of DFS tree is an articulation
        // point if it has more than one child
        if (parentCell[row][col] === -1 && children > 1) {
            apInfo.hasArticulationPoint = true;
        }
    }

    let isValidLandCell = (grid, row, col) => {
        let rows = grid.length;
        let cols = grid[0].length;
        return (
            row >= 0 &&
            col >= 0 &&
            row < rows &&
            col < cols &&
            grid[row][col] === 1
        );
    }

    // Arrays to store information for each cell
    let discoveryTime = [] // FIXME
    let lowestReachable = [] // FIXME
    let parentCell = [] // FIXME

    // Initialize arrays with default values
    for (let i = 0; i < rows; i++) {
        discoveryTime.push(new Array(cols).fill(-1))
        lowestReachable.push(new Array(cols).fill(-1))
        parentCell.push(new Array(cols).fill(-1))
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                landCells++;
                if (discoveryTime[i][j] === -1) {
                    // Start DFS for a new island
                    findArticulationPoints(
                        grid,
                        i,
                        j,
                        discoveryTime,
                        lowestReachable,
                        parentCell,
                        apInfo
                    );
                    islandCount++;
                }
            }
        }
    }

    // Determine the minimum number of days to disconnet the grid
    if (islandCount === 0 || islandCount >= 2) return 0;
    if (landCells === 1) return 1;
    if (apInfo.hasArticulationPoint) return 1;
    return 2;
};

minDays([[0,1,1,0],[0,1,1,0],[0,0,0,0]]);
minDays([[1,1]]);
