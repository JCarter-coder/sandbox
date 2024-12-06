"use strict";
function maxCount(banned, n, maxSum) {
    const notUsed = new Set(banned.filter((num) => num <= n));
    console.log(notUsed);
    /* const available: number[] = new Array();
    for (let i = 1; i <= n; i++) {
        if (!notUsed.has(i)) available.push(i);
    } */
    let count = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (sum + i < maxSum && !notUsed.has(i)) {
            //console.log(i);
            sum += i;
            count++;
        }
        // if the next iteration exceeds maxSum, break
        if (sum + (i + 1) > maxSum)
            break;
    }
    console.log(count);
    return count;
}
;
maxCount([1, 6, 5], 5, 6);
maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1);
maxCount([11], 7, 50);
