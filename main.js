"use strict";
function countGoodTriplets(arr, a, b, c) {
    let ans = 0;
    const N = arr.length;
    const sum = new Array(1001).fill(0);
    for (let j = 0; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
            if (Math.abs(arr[j] - arr[k]) <= b) {
                let lj = arr[j] - a, rj = arr[j] + a;
                let lk = arr[k] - c, rk = arr[k] + c;
                let l = Math.max(0, Math.max(lj, lk));
                let r = Math.min(1000, Math.min(rj, rk));
                if (l <= r) {
                    if (l === 0) {
                        ans += sum[r];
                    }
                    else {
                        ans += sum[r] - sum[l - 1];
                    }
                }
            }
        }
        for (let k = arr[j]; k <= 1000; k++) {
            sum[k]++;
        }
    }
    console.log(ans);
    return ans;
}
;
countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3);
countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1);
