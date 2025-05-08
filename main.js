import { PriorityQueue } from "./node_modules/datastructures-js/index.js";
function minTimeToReach(moveTime) {
    const N = moveTime.length;
    const M = moveTime[0].length;
    const d = Array.from({ length: N }, () => Array(M).fill(Infinity));
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    d[0][0] = 0;
    const queue = new PriorityQueue((a, b) => a.dist - b.dist);
    queue.enqueue({ x: 0, y: 0, dist: 0 });
    while (!queue.isEmpty()) {
        const s = queue.dequeue();
        if (visited[s.x][s.y])
            continue;
        if (s.x === N - 1 && s.y === M - 1) {
            break;
        }
        visited[s.x][s.y] = true;
        for (const [dx, dy] of directions) {
            const nx = s.x + dx;
            const ny = s.y + dy;
            if (nx < 0 || nx >= N || ny < 0 || ny >= M)
                continue;
            const newDist = Math.max(d[s.x][s.y], moveTime[nx][ny]) + ((s.x + s.y) % 2) + 1;
            if (d[nx][ny] > newDist) {
                d[nx][ny] = newDist;
                queue.enqueue({ x: nx, y: ny, dist: newDist });
            }
        }
    }
    console.log(d[N - 1][M - 1]);
    return d[N - 1][M - 1];
}
;
minTimeToReach([[0, 4], [4, 4]]);
minTimeToReach([[0, 0, 0, 0], [0, 0, 0, 0]]);
minTimeToReach([[0, 1], [1, 2]]);
