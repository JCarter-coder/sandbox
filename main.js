"use strict";
function minimumIndex(nums) {
    let x = nums[0];
    let count = 0;
    let xCount = 0;
    let n = nums.length;
    for (let num of nums) {
        if (num === x) {
            count++;
        }
        else {
            count--;
        }
        if (count === 0) {
            x = num;
            count = 1;
        }
    }
    for (let num of nums) {
        if (num === x)
            xCount++;
    }
    count = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === x)
            count++;
        let remainingCount = xCount - count;
        if (count * 2 > i + 1 &&
            remainingCount * 2 > n - i - 1) {
            console.log(i);
            return i;
        }
    }
    console.log(-1);
    return -1;
}
;
minimumIndex([1, 2, 2, 2]);
minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1]);
minimumIndex([3, 3, 3, 3, 7, 2, 2]);
