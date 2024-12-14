"use strict";
function continuousSubarrays(nums) {
    let left = 0;
    let right = 0;
    let currMin;
    let currMax;
    let windowLen = 0;
    let total = 0;
    currMin = currMax = nums[right];
    for (right = 0; right < nums.length; right++) {
        currMin = Math.min(currMin, nums[right]);
        currMax = Math.max(currMax, nums[right]);
        if (currMax - currMin > 2) {
            windowLen = right - left;
            total += ((windowLen * (windowLen + 1)) / 2);
            left = right;
            currMin = currMax = nums[right];
            while (left > 0 && Math.abs(nums[right] - nums[left - 1]) <= 2) {
                left--;
                currMin = Math.min(currMin, nums[left]);
                currMax = Math.max(currMax, nums[left]);
            }
            if (left < right) {
                windowLen = right - left;
                total -= ((windowLen * (windowLen + 1)) / 2);
            }
        }
    }
    windowLen = right - left;
    total += ((windowLen * (windowLen + 1)) / 2);
    console.log(total);
    return total;
}
;
continuousSubarrays([5, 4, 2, 4]);
continuousSubarrays([1, 2, 3]);
continuousSubarrays([65, 66, 67, 66, 66, 65, 64, 65, 65, 64]);
