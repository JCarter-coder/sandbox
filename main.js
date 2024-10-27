/**
 * @param {number} m
 * @param {number} n
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var tourOfKnight = function(m, n, r, c) {
    const knightMoves = [
        [-1,-2],
        [-2,-1],
        [-1,2],
        [-2,1],
        [1,-2],
        [2,-1],
        [1,2],
        [2,1],
    ]

    let chessboard = [];
    for (let i = 0; i < m; i++) {
        chessboard.push(new Array(n).fill(0));
    }
    chessboard[r][c] = -1;

    let isValidMove = (chessboard, row, col) => {
        return (
            row >= 0 &&
            col >= 0 &&
            row < chessboard.length &&
            col < chessboard[0].length &&
            chessboard[row][col] === 0
        );
    }

    let countAccessibleMoves = (chessboard, row, col) => {
        let count = 0;
        for (let move of knightMoves) {
            let nextRow = row + move[0];
            let nextCol = col + move[1];
            if (isValidMove(chessboard, nextRow, nextCol)) count++;
        }
        return count;
    }

    let getNextMovesWarnsdorff = (chessboard, row, col) => {
        let nextMoves = [];
        for (let moveIndex = 0; moveIndex < 8; moveIndex++) {
            let nextRow = row + knightMoves[moveIndex][0];
            let nextCol = col + knightMoves[moveIndex][1];
            let accessibilityScore = countAccessibleMoves(
                chessboard,
                nextRow,
                nextCol
            );
            nextMoves.push([accessibilityScore, moveIndex]);
        }
        nextMoves.sort((a,b) => a[0] - b[0]);
        return nextMoves;
    }

    let solveKnightsTour = (
        rows,
        cols,
        currentRow,
        currentCol,
        chessboard,
        moveCount
    ) => {
        if (moveCount === rows * cols) return true;

        let nextMoves = getNextMovesWarnsdorff(
            chessboard,
            currentRow,
            currentCol
        );

        for (let move of nextMoves) {
            let nextRow = currentRow + knightMoves[move[1]][0];
            let nextCol = currentCol + knightMoves[move[1]][1];

            if (!isValidMove(chessboard, nextRow, nextCol)) continue;

            chessboard[nextRow][nextCol] = moveCount;

            if (
                solveKnightsTour(
                    rows,
                    cols,
                    nextRow,
                    nextCol,
                    chessboard,
                    moveCount + 1
                )
            ) return true;

            chessboard[nextRow][nextCol] = 0;
        }
        return false;
    }

    solveKnightsTour(m, n, r, c, chessboard, 1);

    chessboard[r][c] = 0;
    console.log(chessboard);
};

tourOfKnight(1,1,0,0);
tourOfKnight(3,4,0,0);

