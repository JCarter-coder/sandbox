"use strict";
function minSum(nums1, nums2) {
    let sum1 = 0;
    let nums1ZeroCount = 0;
    for (let i = 0; i < nums1.length; i++) {
        sum1 += nums1[i];
        if (nums1[i] === 0) {
            nums1ZeroCount++;
            sum1++;
        }
    }
    let sum2 = 0;
    let nums2ZeroCount = 0;
    for (let i = 0; i < nums2.length; i++) {
        sum2 += nums2[i];
        if (nums2[i] === 0) {
            nums2ZeroCount++;
            sum2++;
        }
    }
    if ((nums1ZeroCount === 0 && sum2 > sum1) || (nums2ZeroCount === 0 && sum1 > sum2)) {
        console.log(-1);
        return -1;
    }
    console.log(Math.max(sum1, sum2));
    return Math.max(sum1, sum2);
}
;
minSum([3, 2, 0, 1, 0], [6, 5, 0]);
minSum([2, 0, 2, 0], [1, 4]);
