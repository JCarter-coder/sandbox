"use strict";
function maximumSubarraySum(nums, k) {
    const map = new Map();
    let sum = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        // Add the current element to the map and update the sum
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        sum += nums[i];
        // When window reaches size k, check for uniqueness and update max
        if (i >= k - 1) {
            if (map.size === k) {
                max = Math.max(max, sum);
            }
            // Remove the element going out of the window
            const outElem = nums[i + 1 - k];
            if (map.get(outElem) === 1) {
                map.delete(outElem);
            }
            else {
                map.set(outElem, map.get(outElem) - 1);
            }
            sum -= outElem;
        }
    }
    console.log(max);
    return max;
}
;
maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3);
maximumSubarraySum([4, 4, 4], 3);
maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 1);
maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 13);
