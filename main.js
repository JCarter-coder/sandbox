var getAncestors = function(n, edges) {
    // Initialize adjacency list for each node and ancestors list
    const adjacencyList = new Array(n);
    const ancestors = new Array();

    let findAncestorsDFS = function(ancestor, adjacencyList, currrentNode, ancestors) {
        for (let childNode of adjacencyList[currrentNode]) {
            // Check if the ancestor is already added to avoid duplicates
            if (ancestors[childNode].length === 0 ||
                ancestors[childNode][ancestors[childNode].length - 1] != ancestor
            ) {
                ancestors[childNode].push(ancestor);
                findAncestorsDFS(ancestor, adjacencyList, childNode, ancestors);
            }
        }
    }

    // Populate the adjacency list with edges
    for (let i = 0; i < n; i++) {
        adjacencyList[i] = new Array();
        ancestors.push(new Array());
    }

    // Populate the adjacency list with edges
    for (let edge of edges) {
        let from = edge[0];
        let to = edge[1];
        adjacencyList[from].push(to);
    }

    // Perform DFS for each node to find all its ancestors
    for (let i = 0; i < n; i++) {
        findAncestorsDFS(i, adjacencyList, i, ancestors);
    }

    //console.log(adjacencyList);

    console.log(ancestors);
    return ancestors;    
};

getAncestors(8,[[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]);
getAncestors(5,[[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]);
