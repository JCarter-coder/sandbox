var fractionAddition = function(expression) {
    let findGCD = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    const regex = /([+-]?\d+)\/(\d+)/g;
    let numerator = 0;
    let denominator = 1;
    let match;

    while ((match = regex.exec(expression)) !== null) {
        let num = parseInt(match[1]);
        let den = parseInt(match[2]);

        numerator = numerator * den + num * denominator;
        denominator *= den;

        let gcdVal = findGCD(Math.abs(numerator), denominator);
        numerator /= gcdVal;
        denominator /= gcdVal;
    }

    console.log(`${numerator}/${denominator}`);
};

fractionAddition("-1/2+1/2");
fractionAddition("-1/2+1/2+1/3");
fractionAddition("1/3-1/2");
fractionAddition("-5/2+10/3+7/9");
