var minMoves = function(rooks) {
    let minMoves = 0;
    let N = rooks.length;

    const row = new Array(N).fill(0);
    const col = new Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        row[rooks[i][0]]++;
        col[rooks[i][1]]++;
    }

    let rowMinMoves = 0, colMinMoves = 0;
    for (let i = 0; i < N; i++) {
        rowMinMoves += row[i] - 1;
        colMinMoves += col[i] - 1;

        minMoves += Math.abs(rowMinMoves) + Math.abs(colMinMoves);
    }

    console.log(minMoves);
};

minMoves([[0,0],[1,0],[1,1]]);
minMoves([[0,0],[0,1],[0,2],[0,3]]);
