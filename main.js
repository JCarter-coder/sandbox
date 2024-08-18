var nthUglyNumber = function(n) {
    const uglyNumbers = [1];
    
    // Pointers
    let indexMultiple2 = 0;
    let indexMultiple3 = 0;
    let indexMultiple5 = 0;
    let nextMultiple2 = 2;
    let nextMultiple3 = 3;
    let nextMultiple5 = 5;

    for (let i = 1; i < n; i++) {
        let nextUglyNumber = Math.min(
            nextMultiple2,
            Math.min(nextMultiple3, nextMultiple5)
        );
        uglyNumbers.push(nextUglyNumber);

        if (nextUglyNumber === nextMultiple2) {
            indexMultiple2++;
            nextMultiple2 = uglyNumbers[indexMultiple2] * 2;
        }

        if (nextUglyNumber === nextMultiple3) {
            indexMultiple3++;
            nextMultiple3 = uglyNumbers[indexMultiple3] * 3;
        }

        if (nextUglyNumber === nextMultiple5) {
            indexMultiple5++;
            nextMultiple5 = uglyNumbers[indexMultiple5] * 5;
        }
    }

    console.log(uglyNumbers[n - 1]);
};

nthUglyNumber(10);
nthUglyNumber(1);
