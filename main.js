"use strict";
function maximumTripletValue(nums) {
    const N = nums.length;
    let result = 0;
    let iMax = 0;
    let delta = 0;
    for (let k = 0; k < N; k++) {
        result = Math.max(result, delta * nums[k]);
        delta = Math.max(delta, iMax - nums[k]);
        iMax = Math.max(iMax, nums[k]);
    }
    console.log(result);
    return result;
}
;
maximumTripletValue([12, 6, 1, 2, 7]);
maximumTripletValue([1, 10, 3, 4, 19]);
maximumTripletValue([1, 2, 3]);
