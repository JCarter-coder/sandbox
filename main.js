"use strict";
function findLengthOfShortestSubarray(arr) {
    let right = arr.length - 1;
    while (right > 0 && arr[right] >= arr[right - 1]) {
        right--;
    }
    let ans = right;
    let left = 0;
    while (left < right && (left === 0 || arr[left - 1] <= arr[left])) {
        // find next valid number after arr[left]
        while (right < arr.length && arr[left] > arr[right]) {
            right++;
        }
        ans = Math.min(ans, right - left - 1);
        left++;
    }
    console.log(ans);
    return ans;
}
;
findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5]);
findLengthOfShortestSubarray([5, 4, 3, 2, 1]);
findLengthOfShortestSubarray([1, 2, 3]);
