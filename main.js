var maxPoints = function(points) {
    let cols = points[0].length;
    let currentRow = new Array(cols).fill(0);
    let previousRow = new Array(cols).fill(0);

    for (let row of points) {
        let runningMax = 0;

        // Left to right pass
        for (let col = 0; col < cols; ++col) {
            runningMax = Math.max(runningMax - 1, previousRow[col]);
            currentRow[col] = runningMax;
        }

        runningMax = 0;
        // Right to left pass
        for (let col = cols - 1; col >= 0; --col) {
            runningMax = Math.max(runningMax - 1, previousRow[col]);
            currentRow[col] = Math.max(currentRow[col], runningMax) + row[col];
        }

        // Update previousRow for next iteration
        previousRow = currentRow;
    }

    // Find maximum points in the last row
    let maxPoints = 0;
    for (let col = 0; col < cols; ++col) {
        maxPoints = Math.max(maxPoints, previousRow[col]);
    }

    console.log(maxPoints);
};

maxPoints([[1,2,3],[1,5,1],[3,1,1]]);
maxPoints([[1,5],[2,3],[4,2]]);
