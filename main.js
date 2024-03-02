var reduce = function(nums, fn, init) {
    let accum = init;
    for (let i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i]);
    }
    console.log(accum);
};

reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0);
reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100);
reduce([], function sum(accum, curr) { return 0; }, 25);