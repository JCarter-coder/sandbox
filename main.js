var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    const traversed = new Array();
    let step = 1;
    let direction = 0;

    while (traversed.length < rows * cols) {
        for (let i = 0; i < 2; ++i) {
            for (let j = 0; j < step; ++j) {
                if (
                    rStart >= 0 &&
                    rStart < rows &&
                    cStart >= 0 &&
                    cStart < cols
                ) traversed.push([rStart,cStart]);
                rStart += dir[direction][0];
                cStart += dir[direction][1];
            }
            direction = (direction + 1) % 4;
        }
        ++step;
    }
    console.log(traversed);
};

spiralMatrixIII(1,4,0,0);
spiralMatrixIII(5,6,1,4);
