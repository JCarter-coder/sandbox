/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let N = nums.length;
    let rightMax = new Array(N);
    
    rightMax[N - 1] = nums[N - 1];
    for (let i = N - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    }

    let left = 0, right = 0;
    let maxWidth = 0;

    while (right < N) {
        while (left < right && nums[left] > rightMax[right]) left ++;

        maxWidth = Math.max(maxWidth, right - left);
        right++;
    }
    console.log(maxWidth);
};

maxWidthRamp([6,0,8,2,1,5]);
maxWidthRamp([9,8,1,0,1,9,4,0,4,1]);
