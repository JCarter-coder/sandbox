"use strict";
function findEvenNumbers(digits) {
    const digitSet = new Set([]);
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 0) {
            continue; // Skip zero
        }
        for (let j = 0; j < digits.length; j++) {
            if (i === j) {
                continue; // Skip same digit
            }
            for (let k = 0; k < digits.length; k++) {
                if (i === k || j === k) {
                    continue; // Skip same digit
                }
                const num = digits[i] * 100 + digits[j] * 10 + digits[k];
                if (num % 2 === 0 && num >= 100 && !digitSet.has(num)) {
                    digitSet.add(num);
                }
            }
        }
    }
    // Convert Set to Array and sort it
    const sortedArray = Array.from(digitSet).sort((a, b) => a - b);
    //Array.from(digitSet).sort((a, b) => a - b);
    console.log(sortedArray);
    return sortedArray;
}
;
findEvenNumbers([2, 1, 3, 0]);
findEvenNumbers([2, 2, 8, 8, 2]);
findEvenNumbers([3, 7, 5]);
