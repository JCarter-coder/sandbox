var maxOperations = function(nums, k) {
    nums.sort((a,b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let result = 0;
    while (left < right) {
        if (nums[right] >= k) {
            right--;
            continue;
        }
        if (nums[left] + nums[right] === k) {
            left++;
            right--;
            result++;
            continue;
        }
        if (nums[left] + nums[right] < k) {
            left++;
        } else right--;
    }
    console.log(nums);
    console.log(result);
};

maxOperations([1,2,3,4],5);
maxOperations([3,1,3,4,3],6);