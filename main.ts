import { PriorityQueue } from "./node_modules/datastructures-js/index.js";

function countPaths(n: number, roads: number[][]): number {
    const MOD = 1000000007;
    const graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, new Array());
    }

    for (let road of roads) {
        let startNode = road[0];
        let endNode = road[1];
        let travelTime = road[2];
        graph.get(startNode).push([endNode, travelTime]);
        graph.get(endNode).push([startNode, travelTime]);
    }

    const shortestTime = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    const pathCount = new Array(n).fill(0);

    shortestTime[0] = 0;
    pathCount[0] = 1;

    const minHeap = new PriorityQueue((a: number[], b: number[]) => a[0] - b[0]);

    minHeap.enqueue([0,0]);
    while (!minHeap.isEmpty()) {
        let top: number[] = minHeap.dequeue();
        let currTime = top[0];
        let currNode = top[1];

        if (currTime > shortestTime[currNode]) {
            continue;
        }

        for (let neighbor of graph.get(currNode)) {
            let neighborNode = neighbor[0];
            let roadTime = neighbor[1];

            if (currTime + roadTime < shortestTime[neighborNode]) {
                shortestTime[neighborNode] = currTime + roadTime;
                pathCount[neighborNode] = pathCount[currNode];
                minHeap.enqueue(
                    [shortestTime[neighborNode], neighborNode]
                );
            }
            else if (currTime + roadTime === shortestTime[neighborNode]) {
                pathCount[neighborNode] = (
                    pathCount[neighborNode] + pathCount[currNode]
                ) % MOD;
            }
        }
    }

    console.log(pathCount[n-1]);
    return pathCount[n-1];
};

countPaths(
    7,
    [
        [0,6,7],
        [0,1,2],
        [1,2,3],
        [1,3,3],
        [6,3,3],
        [3,5,1],
        [6,5,1],
        [2,5,1],
        [0,4,5],
        [4,6,2]
    ]
);
countPaths(
    2,
    [
        [1,0,10]
    ]
);
