function minCost(grid: number[][]): number {
    const dirs: number[][] = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0]
    ];

    let m = grid.length;
    let n = grid[0].length;

    const cost: number[][] = Array.from({ length: m }, () => Array(n).fill(Infinity));
    cost[0][0] = 0;

    const deque: { x: number; y: number; c: number }[] = [];
    deque.push({ x: 0, y: 0, c: 0 });

    while (deque.length > 0) {
        const { x, y, c } = deque.shift()!;

        for (let i = 0; i < 4; i++) {
            let dx = dirs[i][0];
            let dy = dirs[i][1];

            const nx = x + dx;
            const ny = y + dy;

            if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
                continue;
            }

            const newCost = c + (grid[x][y] === i + 1 ? 0 : 1);

            if (newCost >= cost[nx][ny]) {
                continue;
            }

            cost[nx][ny] = newCost;

            if (grid[x][y] === i + 1) {
                deque.unshift({ x: nx, y: ny, c: newCost });
            } else {
                deque.push({ x: nx, y: ny, c: newCost });
            }
        }
    }

    console.log(cost[m - 1][n - 1]);
    return cost[m - 1][n - 1];
};

minCost([[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]);
minCost([[1,1,3],[3,2,2],[1,1,4]]);
minCost([[1,2],[4,3]]);
