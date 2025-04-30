function findNumbers(nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            result++;
        }
    }
    console.log(result);
    return result;
};

findNumbers([12,345,2,6,7896]);
findNumbers([555,901,482,1771]);
