"use strict";
function threeConsecutiveOdds(arr) {
    let result = false;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
            if (count === 3) {
                result = true;
                break;
            }
        }
        else {
            count = 0;
        }
    }
    console.log(result);
    return result;
}
;
threeConsecutiveOdds([2, 6, 4, 1]);
threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]);
