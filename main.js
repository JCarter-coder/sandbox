var minPatches = function(nums, n) {
    let patches = 0;
    let i = 0;
    let miss = BigInt(1);
    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += BigInt(nums[i++]);
        } else {
            miss += miss;
            patches++;
        }
    }
    console.log(patches);
};

minPatches([1,3],6);
minPatches([1,5,10],20);
minPatches([1,2,2],5);
