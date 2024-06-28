var maximumImportance = function(n, roads) {
    const degree = new Array(n).fill(0);

    for (let edge of roads) {
      degree[edge[0]]++;
      degree[edge[1]]++;
    }

    degree.sort((a,b) => a - b);

    let setValue = 1;
    let totalImportance = 0;
    for (let d of degree) {
      totalImportance += (setValue * d);
      setValue++;
    }

    console.log(totalImportance);
};

maximumImportance(5,[[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]);
maximumImportance(5,[[0,3],[2,4],[1,3]]);