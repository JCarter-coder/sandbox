var findMaxK = function(nums) {
    const container = {};
    // default value of -1
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        if (!container[(nums[i])]) {
            container[nums[i]] = 0;
        }
        let compare = (-nums[i]).toString();
        if (Object.keys(container).includes(compare)) {
            if (Math.abs(nums[i]) > result) {
                result = Math.abs(nums[i]);
            }
        }
    }
    console.log(result);
    return result;
};

findMaxK([-1,2,-3,3]);
findMaxK([-1,10,6,7,-7,1]);
findMaxK([-10,8,6,7,-2,-3]);
