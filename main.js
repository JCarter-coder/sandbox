"use strict";
function magnificentSets(n, edges) {
    const adjList = Array.from({ length: n }, () => Array());
    const parent = new Array(n).fill(-1);
    const depth = new Array(n).fill(0);
    const getNumberOfGroups = (adjList, srcNode, n) => {
        const nodesQueue = new Array();
        const layerSeen = new Array(n).fill(-1);
        nodesQueue.push(srcNode);
        layerSeen[srcNode] = 0;
        let deepestLayer = 0;
        while (nodesQueue.length !== 0) {
            let numOfNodesInLayer = nodesQueue.length;
            for (let i = 0; i < numOfNodesInLayer; i++) {
                let currentNode = nodesQueue.shift();
                if (currentNode !== undefined) {
                    for (let neighbor of adjList[currentNode]) {
                        if (layerSeen[neighbor] === -1) {
                            layerSeen[neighbor] = deepestLayer + 1;
                            nodesQueue.push(neighbor);
                        }
                        else {
                            if (layerSeen[neighbor] === deepestLayer) {
                                return -1;
                            }
                        }
                    }
                }
            }
            deepestLayer++;
        }
        return deepestLayer;
    };
    const find = (node, parent) => {
        while (parent[node] !== -1) {
            node = parent[node];
        }
        return node;
    };
    const union = (node1, node2, parent, depth) => {
        node1 = find(node1, parent);
        node2 = find(node2, parent);
        if (node1 === node2)
            return;
        if (depth[node1] < depth[node2]) {
            let temp = node1;
            node1 = node2;
            node2 = temp;
        }
        parent[node2] = node1;
        if (depth[node1] === depth[node2])
            depth[node1]++;
    };
    for (let edge of edges) {
        adjList[edge[0] - 1].push(edge[1] - 1);
        adjList[edge[1] - 1].push(edge[0] - 1);
        union(edge[0] - 1, edge[1] - 1, parent, depth);
    }
    const numOfGroupsForComponent = new Map();
    for (let node = 0; node < n; node++) {
        let numberOfGroups = getNumberOfGroups(adjList, node, n);
        if (numberOfGroups === -1) {
            console.log(-1);
            return -1;
        }
        let rootNode = find(node, parent);
        numOfGroupsForComponent.set(rootNode, Math.max(numOfGroupsForComponent.get(rootNode) || 0, numberOfGroups));
    }
    let totalNumberOfGroups = 0;
    for (let numberOfGroups of numOfGroupsForComponent.values()) {
        totalNumberOfGroups += numberOfGroups;
    }
    console.log(totalNumberOfGroups);
    return totalNumberOfGroups;
}
;
magnificentSets(6, [[1, 2], [1, 4], [1, 5], [2, 6], [2, 3], [4, 6]]);
magnificentSets(3, [[1, 2], [2, 3], [3, 1]]);
