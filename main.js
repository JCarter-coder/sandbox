var maxDistance = function(arrays) {
    let answer = 0;
    let N = arrays[0].length;
    let min_val = arrays[0][0];
    let max_val = arrays[0][arrays[0].length - 1];

    for (let i = 1; i < arrays.length; i++) {
        N = arrays[i].length;
        answer = Math.max(
            answer,
            Math.max(
                Math.abs(arrays[i][N - 1] - min_val),
                Math.abs(max_val - arrays[i][0])
            )
        );
        min_val = Math.min(min_val, arrays[i][0]);
        max_val = Math.max(max_val, arrays[i][N - 1]);
    }

    console.log(answer);
};

maxDistance([[1,2,3],[4,5],[1,2,3]]);
maxDistance([[1],[1]]);
maxDistance([[-2],[-3,-2,1]]);
maxDistance([[1,5],[3,4]]);
