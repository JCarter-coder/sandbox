function countSymmetricIntegers(low: number, high: number): number {
    let result = 0;
    for (let i = low; i <= high; i++) {
        if (i < 100 && i % 11 === 0) {
            result++;
        } else if (1000 <= i && i < 10000) {
            let left = Math.floor(i / 1000) + Math.floor((i % 1000) / 100);
            let right = Math.floor((i % 100) / 10) + (i % 10);
            if (left === right) {
                result++;
            }
        }
    }
    console.log(result);
    return result;
};

countSymmetricIntegers(1,100);
countSymmetricIntegers(1200,1230);
