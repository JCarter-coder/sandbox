"use strict";
function minEnd(n, x) {
    let result = BigInt(x);
    let remaining = BigInt(n - 1);
    let position = 1n;
    while (remaining > 0n) {
        if ((BigInt(x) & position) === 0n) {
            result |= (remaining & 1n) * position;
            remaining >>= 1n;
        }
        position <<= 1n;
    }
    console.log(Number(result));
    return Number(result);
}
;
minEnd(3, 4);
minEnd(2, 7);
minEnd(6715154, 7193485);
