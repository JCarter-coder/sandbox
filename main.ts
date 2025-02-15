function punishmentNumber(n: number): number {
    const canPartition = (
        num: number,
        target: number,
    ): boolean => {
        if (target < 0 || num < target) return false;

        if (num === target) return true;

        return (
            canPartition(Math.floor(num / 10), target - (num % 10)) ||
            canPartition(Math.floor(num / 100), target - (num % 100)) ||
            canPartition(Math.floor(num / 1000), target - (num % 1000))
        );
    }

    let result = 0;

    for (let currentNum = 1; currentNum <= n; currentNum++) {
        let squareNum = currentNum * currentNum;

        if (canPartition(squareNum, currentNum)) {
            result += squareNum;
        }
    }

    console.log(result);
    return result;
};

punishmentNumber(10);
punishmentNumber(37);
