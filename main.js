/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    let M = grid.length;
    let N = grid[0].length;
    let dp = [];
    for (let i = 0; i < M; i++) {
        dp.push([1,0]);
    }

    let maxMoves = 0;

    for (let j = 1; j < N; j++) {
        for (let i = 0; i < M; i++) {
            if (grid[i][j] > grid[i][j - 1] && dp[i][0] > 0) {
                dp[i][1] = Math.max(dp[i][1], dp[i][0] + 1);
            }
            if (
                i - 1 >= 0 &&
                grid[i][j] > grid[i - 1][j - 1] &&
                dp[i - 1][0] > 0
            ) {
                dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] + 1);
            }
            if (
                i + 1 < M &&
                grid[i][j] > grid[i + 1][j - 1] &&
                dp[i + 1][0] > 0
            ) {
                dp[i][1] = Math.max(dp[i][1], dp[i + 1][0] + 1);
            }
            maxMoves = Math.max(maxMoves, dp[i][1] - 1);
        }

        for (let k = 0; k < M; k++) {
            dp[k][0] = dp[k][1];
            dp[k][1] = 0;
        }
    }

    console.log(maxMoves);
};

maxMoves([[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]]);
maxMoves([[3,2,4],[2,1,9],[1,1,7]]);
