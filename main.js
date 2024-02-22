var findJudge = function(n, trust) {
    // NOTE: person trust[i][0] trusts person trust[i][1]
    //console.log(trust);
    if (trust.length < n - 1) {
        //return
        console.log(-1);
        return 0;
    }
    
    let trustScores = [];

    for (let x = 0; x < n + 1; x++) {
        trustScores.push(0);
    }
    
    //console.log(`TrustScores: ${trustScores}`);

    for (let candidate of trust) {
        //console.log(candidate);
        trustScores[candidate[0]] -= 1;
        trustScores[candidate[1]] += 1;
    }
    //console.log(`TrustScores: ${trustScores}`);
    
    for (let i = 1; i <= n; i++) {
        if (trustScores[i] === n - 1) {
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
