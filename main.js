var minKBitFlips = function(nums, k) {
    let currentFlips = 0;
    let totalFlips = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i >= k && nums[i - k] === 2) {
            currentFlips--;
        }
        if (currentFlips % 2 === nums[i]) {
            if (i + k > nums.length) {
                console.log(-1);
                return -1;
            }
            nums[i] = 2;
            currentFlips++;
            totalFlips++;
        }
    }

    console.log(totalFlips);
};

minKBitFlips([0,1,0],1);
minKBitFlips([1,1,0],2);
minKBitFlips([0,0,0,1,0,1,1,0],3);
