"use strict";
function countGoodNumbers(n) {
    let MOD = 1e9 + 7;
    const quickmul = (x, y) => {
        let ret = 1n;
        let mul = x;
        while (y > 0n) {
            if (y % 2n === 1n) {
                ret = (ret * mul) % BigInt(MOD);
            }
            mul = (mul * mul) % BigInt(MOD);
            y /= 2n;
        }
        return ret;
    };
    let result = (quickmul(5n, BigInt(n + 1) / 2n) * quickmul(4n, BigInt(n) / 2n)) % BigInt(MOD);
    console.log(result);
    return Number(result);
}
;
countGoodNumbers(1);
countGoodNumbers(4);
countGoodNumbers(50);
countGoodNumbers(1924);
