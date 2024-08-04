var rangeSum = function(nums, n, left, right) {
    let answer = 0;
    const array = [];
    for (let i = 0; i < nums.length; i++) {
        let sumSubArray = nums[i];
        array.push(sumSubArray);
        for (let j = i + 1; j < nums.length; j++) {
            sumSubArray += nums[j];
            array.push(sumSubArray);
        }
    }
    array.sort((a,b) => a - b);
    for (let i = left - 1; i < right; i++) {
        answer += array[i];
    }
    //console.log(array);
    console.log(answer % (1e9 + 7))
};

rangeSum([1,2,3,4],4,1,5);
rangeSum([1,2,3,4],4,3,4);
rangeSum([1,2,3,4],4,1,10);
