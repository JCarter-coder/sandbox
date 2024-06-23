var longestSubarray = function(nums, limit) {
    let maxDeque = new Array();
    let minDeque = new Array();

    let left = 0
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        // maintain maxDeque in decreasing order
        while (maxDeque.length > 0 && maxDeque[maxDeque.length - 1] < nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(nums[right]);
        // maintain minDeque in increasing order
        while (minDeque.length > 0 && minDeque[minDeque.length - 1] > nums[right]) {
            minDeque.pop();
        }
        minDeque.push(nums[right]);
        //console.log(`Max: ${maxDeque}`);
        //console.log(`Min: ${minDeque}`);
        //console.log(`Nums[left] = ${nums[left]}`);

        // check to see if window exceeds the limit
        while (maxDeque[0] - minDeque[0] > limit) {
            // remove the elements that are outside of the current window
            if (maxDeque[0] === nums[left]) {
                maxDeque.shift();
            }
            if (minDeque[0] === nums[left]) {
                minDeque.shift();
            }
            ++left;
        }
        //console.log(`MaxLength: ${maxLength}`);
        //console.log(`Compare to: ${right - left + 1}`);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    console.log(maxLength);
};

longestSubarray([8,2,4,7],4);
longestSubarray([10,1,2,4,7,2],5);
longestSubarray([4,2,2,2,4,4,2,2],0);
