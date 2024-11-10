"use strict";
function minimumSubarrayLength(nums, k) {
    let minLength = Number.MAX_SAFE_INTEGER;
    let windowStart = 0;
    let windowEnd = 0;
    let bitCounts = new Array(32).fill(0);
    function updateBitCounts(bitCounts, num, delta) {
        for (let bitPosition = 0; bitPosition < 32; bitPosition++) {
            if (((num >> bitPosition) & 1) != 0) {
                bitCounts[bitPosition] += delta;
            }
        }
    }
    function convertBitCountsToNumber(bitCounts) {
        let result = 0;
        for (let bitPosition = 0; bitPosition < 32; bitPosition++) {
            if (bitCounts[bitPosition] != 0) {
                result |= 1 << bitPosition;
            }
        }
        return result;
    }
    while (windowEnd < nums.length) {
        updateBitCounts(bitCounts, nums[windowEnd], 1);
        while (windowStart <= windowEnd &&
            convertBitCountsToNumber(bitCounts) >= k) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            updateBitCounts(bitCounts, nums[windowStart], -1);
            windowStart++;
        }
        windowEnd++;
    }
    console.log(minLength === Number.MAX_SAFE_INTEGER ? -1 : minLength);
    return minLength === Number.MAX_SAFE_INTEGER ? -1 : minLength;
}
;
minimumSubarrayLength([1, 2, 3], 2);
minimumSubarrayLength([2, 1, 8], 10);
minimumSubarrayLength([1, 2], 0);
