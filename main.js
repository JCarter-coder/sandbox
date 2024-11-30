"use strict";
function validArrangement(pairs) {
    // Build graph and degrees
    const graph = new Map();
    const inDegree = new Map();
    for (const [from, to] of pairs) {
        if (!graph.has(from))
            graph.set(from, []);
        graph.get(from).push(to);
        inDegree.set(to, (inDegree.get(to) || 0) + 1);
    }
    // Find start node
    let start = pairs[0][0];
    for (const [vertex, edges] of graph) {
        if (edges.length - (inDegree.get(vertex) || 0) === 1) {
            start = vertex;
            break;
        }
    }
    // Hierholzer's algorithm 
    const path = [];
    const traverse = (vertex) => {
        while (graph.has(vertex) && graph.get(vertex).length) {
            const next = graph.get(vertex).pop();
            traverse(next);
            path.push([vertex, next]);
        }
    };
    traverse(start);
    console.log(path.reverse());
    return path.reverse();
}
validArrangement([[5, 1], [4, 5], [11, 9], [9, 4]]);
validArrangement([[1, 3], [3, 2], [2, 1]]);
validArrangement([[1, 2], [1, 3], [2, 1]]);
