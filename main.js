"use strict";
function lexicographicallySmallestArray(nums, limit) {
    const indexes = nums.map((_, idx) => idx)
        .sort((a, b) => nums[a] - nums[b]);
    const result = new Array();
    let i = 0;
    const n = indexes.length;
    while (i < n) {
        const idxArr = new Array();
        const valArr = new Array();
        idxArr.push(indexes[i]);
        valArr.push(nums[indexes[i]]);
        i++;
        while (i < n && nums[indexes[i]] - nums[indexes[i - 1]] <= limit) {
            idxArr.push(indexes[i]);
            valArr.push(nums[indexes[i]]);
            i++;
        }
        idxArr.sort((a, b) => a - b);
        for (let j = 0; j < idxArr.length; j++) {
            result[idxArr[j]] = valArr[j];
        }
    }
    console.log(result);
    return result;
}
;
lexicographicallySmallestArray([1, 5, 3, 9, 8], 2);
lexicographicallySmallestArray([1, 7, 6, 18, 2, 1], 3);
lexicographicallySmallestArray([1, 7, 28, 19, 10], 3);
