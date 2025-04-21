function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let x = 0;
    let y = 0;
    let current = 0;

    for (let d of differences) {
        current += d;
        x = Math.min(x, current);
        y = Math.max(y, current);
        if (y - x > upper - lower) {
            console.log(0);
            return 0;
        }
    }
    let result = (upper - lower) - (y - x) + 1;
    console.log(result);
    return result;
};

numberOfArrays([1,-3,4],1,6);
numberOfArrays([3,-4,5,1,-2],-4,5);
numberOfArrays([4,-7,2],3,6);
