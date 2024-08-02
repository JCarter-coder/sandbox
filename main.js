var minSwaps = function(nums) {
    // Initialize minimum swaps to a large value
    let minimumSwaps = Number.MAX_SAFE_INTEGER;
    let totalOnes = 0;
    for (let num of nums) totalOnes += num;
    // Initialize the count of 1s in the current window
    let onesCount = nums[0];
    let end = 0;

    for (let start = 0; start < nums.length; start++) {
        // Adjust onesCount by removing the element that
        // is sliding out of the window
        if (start !== 0) onesCount -= nums[start - 1];
        // Expand the window to the right until
        // it reaches the desired length
        while (end - start + 1 < totalOnes) {
            end++;
            onesCount += nums[end % nums.length];
        }
        // Update the minimum number of swaps needed
        minimumSwaps = Math.min(minimumSwaps, totalOnes - onesCount);
    }

    console.log(minimumSwaps);
};

minSwaps([0,1,0,1,1,0,0]);
minSwaps([0,1,1,1,0,0,1,1,0]);
minSwaps([1,1,0,0,1]);
