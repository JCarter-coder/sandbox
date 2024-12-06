function maxCount(banned: number[], n: number, maxSum: number): number {
    const notUsed = new Set(banned.filter((num) => num <= n));

    let count: number = 0;

    for (let i = 1; i <= n; i++) {
        if (notUsed.has(i)) continue;
        // if the next iteration exceeds maxSum, break
        if (maxSum - i < 0) {
            console.log(count);
            return count;
        }
        maxSum -= i;
        count++
    }

    console.log(count);
    return count;
};

maxCount([1,6,5],5,6);
maxCount([1,2,3,4,5,6,7],8,1);
maxCount([11],7,50);
