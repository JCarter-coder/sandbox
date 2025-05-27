function differenceOfSums(n: number, m: number): number {
    let num1 = 0;
    let num2 = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            num2 += i;
        } else {
            num1 += i;
        }
    }
    console.log(num1 - num2);
    return num1 - num2;
};

differenceOfSums(10,3);
differenceOfSums(5,6);
differenceOfSums(5,1);
