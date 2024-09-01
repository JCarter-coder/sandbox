var construct2DArray = function(original, m, n) {
    let result = [];
    
    if (original.length !== m * n) {
        console.log(result);
        return result;
    }

    for (let i = 0; i < m; n * i++) {
        let nextRow = original.slice(n * i, n + n * i);
        result.push(nextRow);
    }

    console.log(result);
};

construct2DArray([1,2,3,4],2,2);
construct2DArray([1,2,3],1,3);
construct2DArray([1,2],1,1);
