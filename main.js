var largestLocal = function(grid) {
    let result = [];
    let width = grid[0].length;
    let height = grid.length;

    var maxLocal = function(x, y) {
        let max = 0;
        for (let i = x - 1; i <= x + 1; i++) {
            for (let j = y - 1; j <= y + 1; j++) {
                if (grid[i][j] > max) {
                    max = grid[i][j];
                }
            }
        }
        return max;
    };
    
    for (let i = 1; i < width - 1; i++) {
        let temp = [];
        for (let j = 1; j < height - 1; j++) {
            //analyze the 3x3 grid centered at these indices
            temp.push(maxLocal(i, j));
        }
        result.push(temp);
    }
    console.log(result);
    return result;
};

//largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]);
//largestLocal([[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]);
largestLocal([[20,8,20,6,16,16,7,16,8,10],[12,15,13,10,20,9,6,18,17,6],[12,4,10,13,20,11,15,5,17,1],[7,10,14,14,16,5,1,7,3,11],[16,2,9,15,9,8,6,1,7,15],[18,15,18,8,12,17,19,7,7,8],[19,11,15,16,1,3,7,4,7,11],[11,6,5,14,12,18,3,20,14,6],[4,4,19,6,17,12,8,8,18,8],[19,15,14,11,11,13,12,6,16,19]]);
