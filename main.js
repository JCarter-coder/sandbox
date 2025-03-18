"use strict";
function longestNiceSubarray(nums) {
    let usedBits = 0;
    let windowStart = 0;
    let maxLength = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        while ((usedBits & nums[windowEnd]) !== 0) {
            usedBits ^= nums[windowStart];
            windowStart++;
        }
        usedBits |= nums[windowEnd];
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    console.log(maxLength);
    return maxLength;
}
;
longestNiceSubarray([1, 3, 8, 48, 10]);
longestNiceSubarray([3, 1, 5, 11, 13]);
