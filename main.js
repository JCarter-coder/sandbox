var checkSubarraySum = function(nums, k) {
    let prefixMod = 0;
    let modSeen = new Map();
    modSeen.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        prefixMod = (prefixMod + nums[i]) % k;

        if (modSeen.has(prefixMod)) {
            // ensure that subarray is at least size 2
            if (i - modSeen.get(prefixMod) > 1) {
                console.log('true');
                return true;
            }
        }
        // mark value of prefixMod with current index
        else {
            modSeen.set(prefixMod, i);
        }
    }

    console.log('false');
    return false;
};

checkSubarraySum([23,2,4,6,7],6);
checkSubarraySum([23,2,6,4,7],6);
checkSubarraySum([23,2,6,4,7],13);
checkSubarraySum([5,0,0,0],3);
