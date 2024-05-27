var specialArray = function(nums) {
    let N = nums.length;
    const freq = new Array(N + 1).fill(0);

    for (let i = 0; i < N; i++) {
        freq[Math.min(N, nums[i])]++;
    }
    
    let numGreaterThanOrEqual = 0;
    for (let i = N; i >= 1; i--) {
        numGreaterThanOrEqual += freq[i];
        if (i === numGreaterThanOrEqual) {
            console.log(i);
            return i;
        }
    }

    console.log(-1);
    return -1;
};

specialArray([3,5]);
specialArray([3,5,1]);
specialArray([0,0]);
specialArray([0,4,3,0,4]);
