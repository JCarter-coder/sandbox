var judgeSquareSum = function(c) {
    let a = 0;
    let b = Math.trunc(Math.sqrt(c));

    while (a <= b) {
        if (a**2 + b**2 === c) {
            console.log('true');
            return true;
        } else if (a**2 + b**2 > c) {
            b--;
        } else if (a**2 + b**2 < c) {
            a++;
        }
    }

    console.log('false');
    return false;
};

judgeSquareSum(5);
judgeSquareSum(3);
judgeSquareSum(4);