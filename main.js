"use strict";
function summaryRanges(nums) {
    let left = 0;
    const result = new Array();
    while (left < nums.length) {
        let newRange = nums[left].toString();
        let stopRange = undefined;
        let right = left + 1;
        let increment = nums[left];
        while (right < nums.length &&
            nums[right] === increment + 1) {
            stopRange = nums[right].toString();
            right++;
            increment++;
        }
        if (stopRange !== undefined) {
            newRange += "->" + stopRange;
        }
        result.push(newRange);
        left = right;
    }
    console.log(result);
    return result;
}
;
summaryRanges([0, 1, 2, 4, 5, 7]);
summaryRanges([0, 2, 3, 4, 6, 8, 9]);
