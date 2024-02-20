var missingNumber = function(nums) {
    let low = 0;
    let hi = Math.max(...nums);
    console.log(`[${low}, ${hi}]`)
    nums.sort((a,b) => a - b);
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === (low + i) - low) {
            continue;
        } else console.log(i + low);
    }
    console.log(hi + 1);
};

missingNumber([3,0,1]);
missingNumber([1]);
missingNumber([9,6,4,2,3,5,7,0,1]);
