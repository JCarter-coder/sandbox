"use strict";
function canSortArray(nums) {
    let bitCount = (bString) => {
        let count = 0;
        for (let i = 0; i < bString.length; i++) {
            if (bString.charAt(i) === '1')
                count++;
        }
        return count;
    };
    for (let i = 0; i < nums.length; i++) {
        console.log(bitCount(nums[i].toString(2)));
    }
    return true;
}
;
canSortArray([8, 4, 2, 30, 15]);
canSortArray([1, 2, 3, 4, 5]);
canSortArray([3, 16, 8, 4, 2]);
