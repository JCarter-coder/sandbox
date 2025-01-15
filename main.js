"use strict";
function minimizeXor(num1, num2) {
    let result = 0;
    const isSet = (x, bit) => {
        return (x & (1 << bit)) !== 0;
    };
    const setBit = (x, bit) => {
        return x | (1 << bit);
    };
    let num2Binary = num2.toString(2);
    console.log(`num2: ${num2Binary}`);
    let targetSetBitsCount = 0;
    for (let i = 0; i < num2Binary.length; i++) {
        if (num2Binary[i] === '1')
            targetSetBitsCount++;
    }
    let setBitsCount = 0;
    let currentBit = 31;
    while (setBitsCount < targetSetBitsCount) {
        if (isSet(num1, currentBit) ||
            (targetSetBitsCount - setBitsCount > currentBit)) {
            result = setBit(result, currentBit);
            setBitsCount++;
        }
        currentBit--;
    }
    console.log(result);
    return result;
}
;
minimizeXor(3, 5);
minimizeXor(1, 12);
minimizeXor(25, 72);
