var findCenter = function(edges) {
    if (edges[1][0] === edges[0][0] || edges[1][0] === edges[0][1]) {
        console.log(edges[1][0]);
    } else {
        console.log(edges[1][1]);
    }
};

findCenter([[1,2],[2,3],[4,2]]);
findCenter([[1,2],[5,1],[1,3],[1,4]]);
