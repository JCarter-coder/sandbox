var longestOnes = function(nums, k) {
    let left = 0;
    let right;

    for (right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            k--;
        }
        if (k < 0) {
            k += 1 - nums[left];
            left++;
        }
    }

    console.log(right - left);
};

longestOnes([1,1,1,0,0,0,1,1,1,1,0],2); // 6
longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3); // 10
longestOnes([0,0,0,1],4); // 4