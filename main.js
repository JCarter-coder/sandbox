var minOperations = function(nums, k) {
    let counter = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < k) {
            nums.splice(i, 1);
            counter++;
        }
    }
    console.log(counter);
};

minOperations([2,11,10,1,3], 10);
minOperations([1,1,2,4,9], 1);
minOperations([1,1,2,4,9], 9);