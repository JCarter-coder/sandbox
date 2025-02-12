"use strict";
function maximumSum(nums) {
    let result = -1;
    const digitMapping = new Array(82).fill(0);
    for (let element of nums) {
        let digitSum = 0;
        for (let currValue = element; currValue !== 0; currValue = Math.floor(currValue / 10)) {
            let currDigit = currValue % 10;
            digitSum += currDigit;
        }
        if (digitMapping[digitSum] > 0) {
            result = Math.max(result, digitMapping[digitSum] + element);
        }
        digitMapping[digitSum] = Math.max(digitMapping[digitSum], element);
    }
    console.log(result);
    return result;
}
;
maximumSum([18, 43, 36, 13, 7]);
maximumSum([10, 12, 19, 14]);
