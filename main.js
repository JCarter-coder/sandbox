var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxAvg = sum / k;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxAvg = Math.max(maxAvg, sum / k);
    }
    console.log(maxAvg);
};

findMaxAverage([1,12,-5,-6,50,3],4);
findMaxAverage([5],1);
