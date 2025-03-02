"use strict";
function mergeArrays(nums1, nums2) {
    let index1 = 0;
    let index2 = 0;
    const result = new Array();
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1][0] === nums2[index2][0]) {
            result.push([
                nums1[index1][0],
                nums1[index1][1] + nums2[index2][1]
            ]);
            index1++;
            index2++;
        }
        else if (nums1[index1][0] < nums2[index2][0]) {
            result.push(nums1[index1++]);
        }
        else
            result.push(nums2[index2++]);
    }
    while (index1 < nums1.length) {
        result.push(nums1[index1++]);
    }
    while (index2 < nums2.length) {
        result.push(nums2[index2++]);
    }
    console.log(result);
    return result;
}
;
mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]]);
mergeArrays([[2, 4], [3, 6], [5, 5]], [[1, 3], [4, 3]]);
