"use strict";
function check(nums) {
    const N = nums.length;
    let inversionCount = 0;
    if (N <= 1)
        return true;
    for (let i = 0; i < N; i++) {
        if (nums[i] < nums[i - 1]) {
            inversionCount++;
        }
    }
    if (nums[0] < nums[N - 1]) {
        inversionCount++;
    }
    console.log(inversionCount <= 1);
    return inversionCount <= 1;
}
;
check([3, 4, 5, 1, 2]);
check([2, 1, 3, 4]);
check([1, 2, 3]);
check([1, 1, 1]);
