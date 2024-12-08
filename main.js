"use strict";
function maxTwoEvents(events) {
    events.sort((a, b) => a[0] - b[0]);
    const dp = new Array();
    for (let i = 0; i < events.length; i++) {
        dp[i] = new Array(3).fill(-1);
    }
    const findEvents = (events, idx, cnt, dp) => {
        if (cnt === 2 || idx >= events.length)
            return 0;
        if (dp[idx][cnt] === -1) {
            let end = events[idx][1];
            let lo = idx + 1;
            let hi = events.length - 1;
            while (lo < hi) {
                let mid = lo + ((hi - lo) >> 1);
                if (events[mid][0] > end)
                    hi = mid;
                else
                    lo = mid + 1;
            }
            let include = events[idx][2] + (lo < events.length && events[lo][0] > end
                ? findEvents(events, lo, cnt + 1, dp)
                : 0);
            let exclude = findEvents(events, idx + 1, cnt, dp);
            dp[idx][cnt] = Math.max(include, exclude);
        }
        return dp[idx][cnt];
    };
    console.log(dp);
    let ans = findEvents(events, 0, 0, dp);
    console.log(ans);
    return ans;
}
;
maxTwoEvents([[1, 3, 2], [4, 5, 2], [2, 4, 3]]);
maxTwoEvents([[1, 3, 2], [4, 5, 2], [1, 5, 5]]);
maxTwoEvents([[1, 5, 3], [1, 5, 1], [6, 6, 5]]);
