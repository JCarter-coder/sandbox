var frequencySort = function(nums) {
    const freq = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (freq.get(nums[i])) {
            freq.set(nums[i], freq.get(nums[i]) + 1);
        } else freq.set(nums[i], 1);
    }
    
    console.log(nums.sort((a,b) => freq.get(a) - freq.get(b) || b - a));
};

frequencySort([1,1,2,2,2,3]);
frequencySort([2,3,1,3,2]);
frequencySort([-1,1,-6,4,5,-6,1,4,1]);
