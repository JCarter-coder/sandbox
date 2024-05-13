var minCost = function(n, roads, appleCost, k) {
    // include town zero
    n += 1;
    const visited = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    // starting from town zero
    visited[0] = 0;

    // create list for the graph
    const graph = Array.from({ length: n}, () => []);

    // connect town zero to all other towns with appleCost
    for (let i = 1; i < n; i++) {
        graph[0].push([i, appleCost[i - 1]]);
    }

    // build the graph with roads and adjusted costs
    roads.forEach(([src, dst, cost]) => {
        const adjustedCost = (k + 1) * cost;
        graph[src].push([dst, adjustedCost]);
        graph[dst].push([src, adjustedCost]);
    });

    // queue for bfs
    const queue = [[0,0]];

    while (queue.length > 0) {
        const [currentNode, currentCost] = queue.shift();

        if (visited[currentNode] < currentCost) {
            continue;
        }

        // explore neighbors
        graph[currentNode].forEach(([nextNode, travelCost]) => {
            const newCost = currentCost + travelCost;
            if (visited[nextNode] > newCost) {
                visited[nextNode] = newCost;
                queue.push([nextNode, newCost]);
            }
        });
    }

    // prepare the result excluding town 0
    console.log(visited.slice(1));
};

minCost(4,[[1,2,4],[2,3,2],[2,4,5],[3,4,1],[1,3,4]],[56,42,102,301],2);
minCost(3,[[1,2,5],[2,3,1],[3,1,2]],[2,3,1],3);
