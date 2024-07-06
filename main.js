var earliestAcq = function(logs, n) {
    logs.sort((a,b) => a[0] - b[0]);
    const dict =[];
    for (let i = 0; i < n; i++) {
        dict.push([i]);
    }
    for (let log of logs) {
        const [ ts, a, b ] = log;
        if (!dict[a].includes(b)) {
            let group = [...dict[a], ...dict[b]];
            for (let i of group) {
                dict[i] = group;
            }
        }
        if (dict[a].length == n) return ts;
    }
    return -1;
};

earliestAcq([[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]],6);
earliestAcq([[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]],4);
