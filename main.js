"use strict";
function closestPrimes(left, right) {
    let prevPrime = -1;
    let closestA = -1;
    let closestB = -1;
    let minDifference = 1000000;
    const isPrime = (num) => {
        if (num < 2)
            return false;
        if (num === 2 || num === 3)
            return true;
        if (num % 2 === 0)
            return false;
        for (let divisor = 3; divisor * divisor <= num; divisor += 2) {
            if (num % divisor === 0)
                return false;
        }
        return true;
    };
    for (let candidate = left; candidate <= right; candidate++) {
        if (isPrime(candidate)) {
            if (prevPrime !== -1) {
                let difference = candidate - prevPrime;
                if (difference < minDifference) {
                    minDifference = difference;
                    closestA = prevPrime;
                    closestB = candidate;
                }
                if (difference === 2 || difference === 1) {
                    console.log([prevPrime, candidate]);
                    return [prevPrime, candidate];
                }
            }
            prevPrime = candidate;
        }
    }
    console.log(closestA === -1 ? [-1, -1] : [closestA, closestB]);
    return (closestA === -1 ?
        [-1, -1] :
        [closestA, closestB]);
}
;
closestPrimes(10, 19);
closestPrimes(4, 6);
