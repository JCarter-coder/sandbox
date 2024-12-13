"use strict";
function maxLength(ribbons, k) {
    let left = 0;
    let right = Math.max(...ribbons);
    const isPossible = (x, ribbons, k) => {
        let totalRibbons = 0;
        for (let ribbon of ribbons) {
            totalRibbons += Math.floor(ribbon / x);
            if (totalRibbons >= k) {
                return true;
            }
        }
        return false;
    };
    while (left < right) {
        let middle = Math.floor((left + right + 1) / 2);
        if (isPossible(middle, ribbons, k)) {
            left = middle;
        }
        else {
            right = middle - 1;
        }
    }
    console.log(left);
    return left;
}
;
maxLength([9, 7, 5], 3);
maxLength([7, 5, 9], 4);
maxLength([5, 7, 9], 22);
