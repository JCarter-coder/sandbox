var findTheCity = function(n, edges, distanceThreshold) {
    let INF = 1e9 + 7;
    const distanceMatrix = [];
    // Initialize distance matrix
    for (let i = 0; i < n; i++) {
        distanceMatrix.push(new Array(n).fill(INF));
        distanceMatrix[i][i] = 0;
    }
    // Populate the distance matrix with initial edge weights
    for (let edge of edges) {
        let start = edge[0];
        let end = edge[1];
        let weight = edge[2];
        distanceMatrix[start][end] = weight;
        distanceMatrix[end][start] = weight; // for undirected graph
    }

    const floyd = (n, distanceMatrix) => {
        for (let k = 0; k < n; k++) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    // Update shortest path from i to j through k
                    distanceMatrix[i][j] = Math.min(
                        distanceMatrix[i][j],
                        distanceMatrix[i][k] + distanceMatrix[k][j]
                    );
                }
            }
        }
    }

    const getCityWithFewestReachable = (n, distanceMatrix, distanceThreshold) => {
        let cityWithFewestReachable = -1;
        let fewestReachableCount = n;
        // Count number of cities reachable within 
        // the distance threshold for each city
        for (let i = 0; i < n; i++) {
            let reachableCount = 0;
            for (let j = 0; j < n; j++) {
                if (i === j) continue;
                // Skip self
                if (distanceMatrix[i][j] <= distanceThreshold) reachableCount++;
            }
            // Update the city with the fewest reachable cities
            if (reachableCount <= fewestReachableCount) {
                fewestReachableCount = reachableCount;
                cityWithFewestReachable = i;
            }
        }
        return cityWithFewestReachable;
    }

    // Compute shortest paths using Floyd-Warshall algorithm
    floyd(n, distanceMatrix);

    console.log(getCityWithFewestReachable(n, distanceMatrix, distanceThreshold));
};

findTheCity(4,[[0,1,3],[1,2,1],[1,3,4],[2,3,1]],4);
findTheCity(5,[[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]],2);