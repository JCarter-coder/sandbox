var twoSum = function(nums, target) {
    const seen = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (seen[target - nums[i]] === undefined) {
            seen[nums[i]] = i;
        } else {
            result.push(seen[target - nums[i]]);
            result.push(i);
            break;
        }
    }

    console.log(result);
};

twoSum([2,7,11,15],9);
twoSum([3,2,4],6);
twoSum([3,3],6);
