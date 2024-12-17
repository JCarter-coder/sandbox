function isHappy(n: number): boolean {
    let happy: boolean = false;
    const seen = new Set();

    const sumDigitSquares = (num: number): number => {
        const numStringArray: string[] = (num).toString().split('');
        let sum: number = 0;
        for (let num of numStringArray) {
            sum += Number(num)**2;
        }
        return sum;
    }

    while (!seen.has(n)) {
        seen.add(n);
        let result = sumDigitSquares(n);

        if (result === 1) {
            happy = true;
            break;
        }

        n = result;
    }

    console.log(happy);
    return happy;
};

isHappy(19);
isHappy(2);
