"use strict";
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(-1);
        this.size = new Array(n).fill(1);
    }
    find(node) {
        if (this.parent[node] < 0)
            return node;
        return this.parent[node] = this.find(this.parent[node]);
    }
    union(nodeA, nodeB) {
        let rootA = this.find(nodeA);
        let rootB = this.find(nodeB);
        if (rootA === rootB)
            return false;
        if (this.size[rootA] > this.size[rootB]) {
            this.parent[rootB] = rootA;
            this.size[rootA] += this.size[rootB];
        }
        else {
            this.parent[rootA] = rootB;
            this.size[rootB] += this.size[rootA];
        }
        return true;
    }
    getSize(node) {
        return this.size[this.find(node)];
    }
}
function maxPoints(grid, queries) {
    const ROW_DIRECTIONS = [0, 0, 1, -1];
    const COL_DIRECTIONS = [1, -1, 0, 0];
    let rowCount = grid.length;
    let colCount = grid[0].length;
    let totalCells = rowCount * colCount;
    const sortedQueries = new Array();
    for (let i = 0; i < queries.length; i++) {
        sortedQueries.push({ index: i, value: queries[i] });
    }
    sortedQueries.sort((a, b) => a.value - b.value);
    const sortedCells = new Array(totalCells);
    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            sortedCells[row * colCount + col] = {
                row: row,
                col: col,
                value: grid[row][col]
            };
        }
    }
    sortedCells.sort((a, b) => a.value - b.value);
    let uf = new UnionFind(totalCells);
    let result = new Array(queries.length);
    let cellIndex = 0;
    for (let query of sortedQueries) {
        while (cellIndex < totalCells &&
            sortedCells[cellIndex].value < query.value) {
            let row = sortedCells[cellIndex].row;
            let col = sortedCells[cellIndex].col;
            let cellId = row * colCount + col;
            for (let direction = 0; direction < 4; direction++) {
                let newRow = row + ROW_DIRECTIONS[direction];
                let newCol = col + COL_DIRECTIONS[direction];
                if (newRow >= 0 &&
                    newRow < rowCount &&
                    newCol >= 0 &&
                    newCol < colCount &&
                    grid[newRow][newCol] < query.value) {
                    uf.union(cellId, newRow * colCount + newCol);
                }
            }
            cellIndex++;
        }
        result[query.index] = query.value > grid[0][0] ? uf.getSize(0) : 0;
    }
    console.log(result);
    return result;
}
;
maxPoints([[1, 2, 3], [2, 5, 7], [3, 5, 1]], [5, 6, 2]);
maxPoints([[5, 2, 1], [1, 1, 2]], [3]);
