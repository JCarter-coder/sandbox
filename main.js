var minDifference = function(nums) {
    if (nums.length <= 4) {
        console.log(0);
        return 0;
    }

    let left = 3;
    let right = nums.length - 1;
    nums.sort((a,b) => a - b);
    console.log(nums);
    let minResult = Number.MAX_SAFE_INTEGER;

    while (left >= 0) {
        minResult = Math.min((nums[right--] - nums[left--]), minResult);
    }

    console.log(minResult);
    /* let minNum = Number.MAX_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;
    const minDeque = [];
    const maxDeque = [];

    for (let i = 0; i < nums.length; i++) {
        // stack minDeque and sort in descending order
        if (minDeque.length < 3) {
            minDeque.push(nums[i]);
            minDeque.sort((a,b) => b - a);
            console.log(minDeque);
        } else {
            for (let j = minDeque.length - 1; j >= 0; j--) {
                if (nums[i] < minDeque[j]) {
                    minDeque[j] = nums[i];
                    minDeque.sort((a,b) => b - a);
                    console.log(`Iteration ${j}: ${minDeque}`);
                    break;
                }
            }
        }
        // stack maxDeque and sort ascending order
        if (maxDeque.length < 3) {
            maxDeque.push(nums[i]);
            maxDeque.sort((a,b) => a - b);
            console.log(maxDeque);
        } else {
            for (let j = 0; j < maxDeque.length; j++) {
                if (nums[i] > maxDeque[j]) {
                    maxDeque[j] = nums[i];
                    maxDeque.sort((a,b) => a - b);
                    console.log(`Iteration ${j}: ${maxDeque}`);
                    break;
                }
            }
        }
    }

    let result = Number.MAX_SAFE_INTEGER; */
    // Determine min difference by hypothetically replacing 3 of 
    // the 2 highest and 2 lowest numbers with either the third
    // lowest or third highest number. 


    //console.log(minDeque);
    //console.log(maxDeque);
};

minDifference([5,3,2,4]);
minDifference([1,5,0,10,14]);
minDifference([3,100,20]);
