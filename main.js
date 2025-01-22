"use strict";
function highestPeak(isWater) {
    const rows = isWater.length;
    const cols = isWater[0].length;
    const INF = rows * cols;
    const cellHeights = Array.from({ length: rows }, () => Array(cols).fill(INF));
    const isValidCell = (row, col, rows, cols) => {
        return (row >= 0 &&
            col >= 0 &&
            row < rows &&
            col < cols);
    };
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (isWater[row][col] === 1) {
                cellHeights[row][col] = 0;
            }
        }
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let minNeighborDistance = INF;
            let neighborRow = row - 1;
            let neighborCol = col;
            if (isValidCell(neighborRow, neighborCol, rows, cols)) {
                minNeighborDistance = Math.min(minNeighborDistance, cellHeights[neighborRow][neighborCol]);
            }
            neighborRow = row;
            neighborCol = col - 1;
            if (isValidCell(neighborRow, neighborCol, rows, cols)) {
                minNeighborDistance = Math.min(minNeighborDistance, cellHeights[neighborRow][neighborCol]);
            }
            cellHeights[row][col] = Math.min(cellHeights[row][col], minNeighborDistance + 1);
        }
    }
    for (let row = rows - 1; row >= 0; row--) {
        for (let col = cols - 1; col >= 0; col--) {
            let minNeighborDistance = INF;
            let neighborRow = row + 1;
            let neighborCol = col;
            if (isValidCell(neighborRow, neighborCol, rows, cols)) {
                minNeighborDistance = Math.min(minNeighborDistance, cellHeights[neighborRow][neighborCol]);
            }
            neighborRow = row;
            neighborCol = col + 1;
            if (isValidCell(neighborRow, neighborCol, rows, cols)) {
                minNeighborDistance = Math.min(minNeighborDistance, cellHeights[neighborRow][neighborCol]);
            }
            cellHeights[row][col] = Math.min(cellHeights[row][col], minNeighborDistance + 1);
        }
    }
    console.log(cellHeights);
    return cellHeights;
}
;
highestPeak([[0, 1], [0, 0]]);
highestPeak([[0, 0, 1], [1, 0, 0], [0, 0, 0]]);
