var subsets = function(nums) {
    let output = [];
    let n = nums.length;

    function backtrack(first = 0, curr = [], k) {
        // if the combination is done
        if (curr.length === k) {
            output.push([...curr]);
            return;
        }
        for (let i = first; i < n; i++) {
            // add nums[i] into the current combination
            curr.push(nums[i]);

            // use the next integers to complete the combo
            backtrack(i + 1, curr, k);

            // backtrack
            curr.pop();
        }
    }

    for (let k = 0; k < n + 1; k++) {
        backtrack(0, [], k);
    }
    
    console.log(output);
    return output;
};

subsets([1,2,3]);
subsets([0]);
