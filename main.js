"use strict";
function xorAllNums(nums1, nums2) {
    let xor1 = 0;
    let xor2 = 0;
    let len1 = nums1.length;
    let len2 = nums2.length;
    if (len2 % 2 != 0) {
        for (let num of nums1) {
            xor1 ^= num;
        }
    }
    if (len1 % 2 != 0) {
        for (let num of nums2) {
            xor2 ^= num;
        }
    }
    console.log(xor1 ^ xor2);
    return xor1 ^ xor2;
}
;
xorAllNums([2, 1, 3], [10, 2, 5, 0]);
xorAllNums([1, 2], [3, 4]);
