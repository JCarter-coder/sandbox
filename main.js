"use strict";
function maxKDivisibleComponents(n, edges, values, k) {
    const adjList = new Array(n);
    const dfs = (currentNode, parentNode, adjList, nodeValues, k, componentCount) => {
        let sum = 0;
        for (let neighborNode of adjList[currentNode]) {
            if (neighborNode !== parentNode) {
                sum += dfs(neighborNode, currentNode, adjList, nodeValues, k, componentCount);
                sum %= k;
            }
        }
        sum += nodeValues[currentNode];
        sum %= k;
        if (sum === 0)
            componentCount[0]++;
        return sum;
    };
    for (let i = 0; i < n; i++) {
        adjList[i] = new Array();
    }
    for (let edge of edges) {
        let node1 = edge[0];
        let node2 = edge[1];
        adjList[node1].push(node2);
        adjList[node2].push(node1);
    }
    const componentCount = new Array(1).fill(0);
    dfs(0, -1, adjList, values, k, componentCount);
    console.log(componentCount[0]);
    return componentCount[0];
}
;
maxKDivisibleComponents(5, [[0, 2], [1, 2], [1, 3], [2, 4]], [1, 8, 1, 4, 4], 6);
maxKDivisibleComponents(7, [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]], [3, 0, 6, 1, 5, 2, 1], 3);
