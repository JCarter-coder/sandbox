var secondMinimum = function(n, edges, time, change) {
    const adj = Array.from({ length: n + 1 }, () => []);

    for (const [v1, v2] of edges) {
        adj[v1].push(v2);
        adj[v2].push(v1);
    }

    const queue = [1];
    let curTime = 0;
    let res = -1;
    const visitTimes = Array.from({ length: n + 1 }, () => []);

    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (node === n) {
                if (res !== -1) return curTime;
                res = curTime;
            }

            for (const nei of adj[node]) {
                const neiTimes = visitTimes[nei];

                if (neiTimes.length === 0 || (neiTimes.length === 1 && neiTimes[0] !== curTime)) {
                    queue.push(nei);
                    visitTimes[nei].push(curTime);
                }
            }
        }

        if (Math.floor(curTime / change) % 2 === 1) {
            curTime += change - (curTime % change);
        }

        curTime += time;
    }

    return -1;
};

secondMinimum(5,[[1,2],[1,3],[1,4],[3,4],[4,5]],3,5);
secondMinimum(2,[[1,2]],3,2);
