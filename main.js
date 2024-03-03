var countSubmatrices = function(grid, k) {
    let m = grid.length; //height
    let n = grid[0].length; //width
    let count = 1;
    let sum = grid[0][0];
    let memoRows = {};
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            memoRows[j] += grid[j][i];
            console.log(`Row ${j}: ${memoRows[j]}`);
            /* if (heightSum += grid[i][j] <= k) {
                heightSum += grid[i][j];
                count++;
            } else break; */
        }
    }





    /* for (let i = 1; i < n; i++) {
        sum += grid[0][i];
        temp = sum;
        if (temp <= k) {
            count++;
        } else break;
    }
    sum = grid[0][0];
    for (let j = 1; j < m; j++) {
        sum += grid[j][0];
        if (sum <= k) {
            count++;
        } else break;
    } */
    console.log(count);
};

countSubmatrices([[7,6,3],[6,6,1]], 18); //expect 4
//countSubmatrices([[7,2,9],[1,5,0],[2,6,6]], 20); //expect 6
