var subsetXORSum = function(nums) {
    let result = 0;
    // capture each bit set in any of the elements
    for (let num of nums) {
        result |= num;
    }
    // multiply by the number of subset XOR
    // totals that will have each bit set
    console.log(result << (nums.length - 1));
};

subsetXORSum([1,3]);
subsetXORSum([5,1,6]);
subsetXORSum([3,4,5,6,7,8]);
