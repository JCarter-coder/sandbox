var resultArray = function(nums) {
    let arr1 = [nums[0]];
    let arr2 = [nums[1]];
    for (let i = 2; i < nums.length; i++) {
        if (arr1[arr1.length-1] > arr2[arr2.length-1]) {
            arr1.push(nums[i]);
        } else {
            arr2.push(nums[i]);
        }
    }
    console.log(arr1.concat(arr2));
};

resultArray([2,1,3]); //expect [2,3,1]
resultArray([5,4,3,8]); //expect [5,3,4,8]
