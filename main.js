var longestSubarray = function(nums) {
    let zeros = 0;
    let longestWindow = 0;
    // Use a sliding window
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        zeros += (nums[i] === 0 ? 1 : 0);

        while (zeros > 1) {
            zeros -= (nums[start] === 0 ? 1 : 0);
            start++;
        }
        longestWindow = Math.max(longestWindow, i - start + 1);
    }

    console.log(longestWindow);
};

longestSubarray([1,1,0,1]); // 4
longestSubarray([0,1,1,1,0,1,1,0,1]); // 6
longestSubarray([1,1,1]); // 3
