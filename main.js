var minOperations = function(nums, k) {
    let counter = 0;
    let x;
    let y;
    
    while (nums.length >= 2) {
        if (nums.every((value) => value >= k)) {
            break;
        } else {
            x = Math.min(...nums);
            nums.splice(nums.indexOf(x), 1);
            y = Math.min(...nums);
            nums.splice(nums.indexOf(y), 1);
            let newNum = Math.min(x, y) * 2 + Math.max(x, y);
            nums.push(newNum);
            counter++;
        }

        
    }

    // if all nums[i] > k, break
    // remove smallest nums from array, x and y

    // nums.push(Math.min(x, y) * 2 + Math.max(x, y))

    
    console.log(counter);
};

minOperations([2,11,10,1,3], 10);
minOperations([1,1,2,4,9], 20);
