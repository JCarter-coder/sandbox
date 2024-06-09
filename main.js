var subarraysDivByK = function(nums, k) {
    let prefixMod = 0;
    let result = 0;

    // there are k mod groups 0 ... k-1.
    let modGroups = new Array(k);
    modGroups.fill(0);
    modGroups[0] = 1;

    for (let num of nums) {
        // take modulo twice to avoid negative remainders
        prefixMod = (prefixMod + num % k + k) % k;
        // add the count of subarrays that have the same remainder
        // as the current one to cancel out the remainders
        result += modGroups[prefixMod];
        modGroups[prefixMod]++;
    }

    console.log(result);
    return result;
};

subarraysDivByK([4,5,0,-2,-3,1],5);
subarraysDivByK([5],9);
