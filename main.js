var smallestDistancePair = function(nums, k) {
    nums.sort((a,b) => a - b);
    let N = nums.length;

    let countPairsWithMaxDistance = (nums, maxDistance) => {
        let count = 0;
        let arraySize = nums.length;
        let left = 0;

        for (let right = 0; right < arraySize; ++right) {
            // Adjust the left pointer to maintain the
            // window with distances <= maxDistance
            while (nums[right] - nums[left] > maxDistance) ++left;
            // Add the number of valid pairs ending
            // at the current right index
            count += right - left;
        }

        return count;
    }

    // Initialize binary search range
    let low = 0;
    let high = nums[N - 1] - nums[0];

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        // Count pairs with distance <= mid
        let count = countPairsWithMaxDistance(nums, mid);

        // Adjust binary search bounds based on count
        if (count < k) low = mid + 1;
        else high = mid;
    }
    
    console.log(low);
};

smallestDistancePair([1,3,1],1);
smallestDistancePair([1,1,1],2);
smallestDistancePair([1,6,1],3);
