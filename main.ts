function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const gridSize: number = grid.length;
    const highestNumber: number = gridSize * gridSize;
    const seen = new Set();
    let doubleVal: number = -1;
    let missingVal: number = -1;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (seen.has(grid[i][j])) {
                doubleVal = grid[i][j];
            }
            seen.add(grid[i][j]);
        }
    }

    for (let i = 1; i <= highestNumber; i++) {
        if (!seen.has(i)) {
            missingVal = i;
            break;
        }
    }

    console.log([doubleVal, missingVal]);
    return [doubleVal, missingVal];
};

findMissingAndRepeatedValues([[1,3],[2,2]]);
findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]);
