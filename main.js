var sortArray = function(nums) {
    const countingSort = () => {
        // Create the counting hash map
        const counts = {};
        // Find the min and max values in the array
        let minVal = Math.min(...nums);
        let maxVal = Math.max(...nums);

        // Update element's count in the hash map
        nums.forEach(val => {
            if (counts[val] === undefined) counts[val] = 0;
            counts[val]++;
        });

        let i = 0;
        // Place each element in its correct
        // position within the array
        for (let val = minVal; val <= maxVal; val++) {
            // Append all vals together if they exist
            while (counts[val] > 0) {
                nums[i] = val;
                i++;
                counts[val]--;
            }
        }
    }

    countingSort(nums);
    console.log(nums);
};

sortArray([5,2,3,1]);
sortArray([5,1,1,2,0,0]);
