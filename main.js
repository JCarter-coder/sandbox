"use strict";
function primeSubOperation(nums) {
    let maxElement = Math.max(...nums);
    const sieve = new Array(maxElement + 1).fill(true);
    sieve[1] = false;
    for (let i = 2; i < Math.sqrt(maxElement + 1); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= maxElement; j += i) {
                sieve[j] = false;
            }
        }
    }
    let currentValue = 1;
    let i = 0;
    while (i < nums.length) {
        let difference = nums[i] - currentValue;
        if (difference < 0) {
            console.log(false);
            return false;
        }
        if (sieve[difference] === true || difference === 0) {
            i++;
            currentValue++;
        }
        else
            currentValue++;
    }
    console.log(true);
    return true;
}
;
primeSubOperation([4, 9, 6, 10]);
primeSubOperation([6, 8, 11, 12]);
primeSubOperation([5, 8, 3]);
