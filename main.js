var numberOfSubarrays = function(nums, k) {
    let atMost = function(nums, k) {
        let windowSize = 0;
        let subarrays = 0;
        let start = 0;

        for (let end = 0; end < nums.length; end++) {
            windowSize += nums[end] % 2;
            // find the first index start where the
            // window has exactly k odd elements
            while (windowSize > k) {
                windowSize -= nums[start] % 2;
                start++;
            }
            // increment number of subarrays with
            // end - start + 1
            subarrays += end - start + 1;
        }
        return subarrays;
    }

    console.log(atMost(nums, k) - atMost(nums, k - 1));
};

numberOfSubarrays([1,1,2,1,1],3);
numberOfSubarrays([2,4,6],1);
numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2);
