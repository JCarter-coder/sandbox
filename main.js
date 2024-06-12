var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let temp = 0;
    // sort zeros to front of array
    while (left < right) {
        while (nums[left] === 0 && left < right) {
            left++;
        }
        if (nums[right] === 0) {
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        } 
        right--;
    }
    left = 0;
    right = nums.length - 1;
    // skip over zeros, then sort 1's and 2's
    while (nums[left] === 0) {
        left++;
    }
    while (left < right) {
        while (nums[right] === 2) {
            right--;
        }
        while (nums[left] === 1) {
            left++;
        }
        if (left < right && nums[left] > nums[right]) {
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
    }
    console.log(nums);
};

sortColors([2,0,2,1,1,0]);
sortColors([2,0,1]);
sortColors([0,0]);
