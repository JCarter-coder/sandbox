"use strict";
function productExceptSelf(nums) {
    let N = nums.length;
    const prefix = new Array(N);
    const suffix = new Array(N);
    const ans = new Array(N);
    prefix[0] = nums[0];
    suffix[N - 1] = nums[N - 1];
    for (let i = 1; i < N; i++) {
        prefix[i] = nums[i] * prefix[i - 1];
        suffix[N - 1 - i] = nums[N - 1 - i] * suffix[N - i];
    }
    for (let i = 0; i < N; i++) {
        if (i > 0 && i < N - 1) {
            ans[i] = prefix[i - 1] * suffix[i + 1];
        }
        else if (i === 0)
            ans[i] = suffix[i + 1];
        else if (i === N - 1)
            ans[i] = prefix[i - 1];
    }
    console.log(prefix);
    console.log(suffix);
    console.log(ans);
    return [];
}
;
productExceptSelf([1, 2, 3, 4]);
productExceptSelf([-1, 1, 0, -3, 3]);
