"use strict";
function closestMeetingNode(edges, node1, node2) {
    const dfs = (node, edges, dist, visit) => {
        visit[node] = true;
        let neighbor = edges[node];
        if (neighbor !== -1 && !visit[neighbor]) {
            dist[neighbor] = dist[node] + 1;
            dfs(neighbor, edges, dist, visit);
        }
    };
    let n = edges.length;
    const dist1 = Array(n).fill(Number.MAX_VALUE);
    const dist2 = Array(n).fill(Number.MAX_VALUE);
    dist1[node1] = 0;
    dist2[node2] = 0;
    const visit1 = Array(n).fill(false);
    const visit2 = Array(n).fill(false);
    dfs(node1, edges, dist1, visit1);
    dfs(node2, edges, dist2, visit2);
    let minDistNode = -1;
    let minDistTillNow = Number.MAX_VALUE;
    for (let currNode = 0; currNode < n; currNode++) {
        if (minDistTillNow > Math.max(dist1[currNode], dist2[currNode])) {
            minDistTillNow = Math.max(dist1[currNode], dist2[currNode]);
            minDistNode = currNode;
        }
    }
    console.log(minDistNode);
    return minDistNode;
}
;
closestMeetingNode([2, 2, 3, -1], 0, 1);
closestMeetingNode([1, 2, -1], 0, 2);
