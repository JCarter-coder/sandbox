"use strict";
function countLargestGroup(n) {
    const groupCount = {};
    for (let i = 1; i <= n; i++) {
        const sumOfDigits = String(i)
            .split('')
            .reduce((acc, digit) => acc + Number(digit), 0);
        groupCount[sumOfDigits] = (groupCount[sumOfDigits] || 0) + 1;
    }
    const maxGroupSize = Math.max(...Object.values(groupCount));
    const largestGroupCount = Object.values(groupCount).filter((size) => size === maxGroupSize).length;
    console.log(largestGroupCount);
    return largestGroupCount;
}
;
countLargestGroup(13);
countLargestGroup(2);
