/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let n = nums.length;
    let totalSum = 0;

    // Calculate total sum of target remainder
    for (let num of nums) {
        totalSum = (totalSum + num) % p;
    }

    let target = totalSum % p;
    if (target === 0) {
        console.log(0);
        return 0
    }

    // Use a hash map to track prefix sum mod p
    const modMap = new Map();
    // Handle the case where the whole prefix is the answer
    modMap.set(0, -1)
    let currentSum = 0;
    let minLen = n;

    // Iterate over the array
    for (let i = 0; i < n; i++) {
        currentSum = (currentSum + nums[i]) % p;

        // Calculate what to remove
        let needed = (currentSum - target + p) % p;

        // If remainder needed, consider this subarray
        if (modMap.has(needed)) {
            minLen = Math.min(minLen, i - modMap.get(needed));
        }

        // Store current remainder and index
        modMap.set(currentSum, i);
    }

    console.log(minLen === n ? -1 : minLen);
};

minSubarray([3,1,4,2],6);
minSubarray([6,3,5,2],9);
minSubarray([1,2,3],3);
