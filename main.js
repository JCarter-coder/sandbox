var findJudge = function(n, trust) {
    // NOTE: person trust[i][0] trusts person trust[i][1]
    console.log(trust);
    if (trust.length < n - 1) {
        //return
        console.log(-1);
        return 0;
    }
    
    let indegrees = [];
    let outdegrees = [];

    for (let x = 0; x < n; x++) {
        indegrees.push(0);
        outdegrees.push(0);
    }
    
    console.log(`Outdegrees: ${outdegrees}`);
    console.log(`Indegrees: ${indegrees}`);

    for (let candidate in trust) {
        console.log(candidate);
        outdegrees[candidate[0]]++;
        indegrees[candidate[1]]++;
    }
    console.log(`Outdegrees: ${outdegrees}`);
    console.log(`Indegrees: ${indegrees}`);
    for (let i = 1; i <= n; i++) {
        if (indegrees[i] === (n - 1) && outdegrees[i] === 0) {
            //return
            console.log(i);
            return 0;
        }
    }
    //return
    console.log(-1);
};

findJudge(2,[[1,2]]);
findJudge(3,[[1,3],[2,3]]);
findJudge(3,[[1,3],[2,3],[3,1]]);
findJudge(3,[[1,2],[2,3]]);
