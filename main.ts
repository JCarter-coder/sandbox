function coloredCells(n: number): number {
    let result = 1 + n * (n - 1) * 2;
    
    console.log(result);
    return result;
};

coloredCells(1);
coloredCells(2);
coloredCells(3);
coloredCells(10000);
