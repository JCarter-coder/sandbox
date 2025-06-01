function distributeCandies(n: number, limit: number): number {
    const calculateCandies = (x: number): number => {
        if (x < 0) return 0;
        return Number(BigInt(x) * (BigInt(x) - 1n) / 2n);
    }

    let result = (
        calculateCandies(n + 2) -
        3 * calculateCandies(n - limit + 1) +
        3 * calculateCandies(n - (limit + 1) * 2 + 2) -
        calculateCandies(n - 3 * (limit + 1) + 2)
    );
    console.log(result);
    return result;
};

distributeCandies(5,2);
distributeCandies(3,3);
