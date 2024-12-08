function maxTwoEvents(events: number[][]): number {
    events.sort((a,b) => a[0] - b[0]);
    const dp: number[][] = new Array();
    for (let i = 0; i < events.length; i++) {
        dp[i] = new Array(3).fill(-1);
    }

    const findEvents = (
        events: number[][],
        idx: number,
        cnt: number,
        dp: number[][]
    ): number => {
        if (cnt === 2 || idx >= events.length) return 0;
        if (dp[idx][cnt] === -1) {
            let end: number = events[idx][1];
            let lo: number = idx + 1;
            let hi: number = events.length - 1;
            while(lo < hi) {
                let mid: number = lo + ((hi - lo) >> 1);
                if (events[mid][0] > end) hi = mid;
                else lo = mid + 1;
            }
            let include: number = events[idx][2] + (
                lo < events.length && events[lo][0] > end 
                ? findEvents(events, lo, cnt + 1, dp) 
                : 0
            );
            let exclude: number = findEvents(events, idx + 1, cnt, dp);
            dp[idx][cnt] = Math.max(include, exclude);
        }
        return dp[idx][cnt];
    }

    let ans = findEvents(events, 0, 0, dp)
    console.log(ans);
    return ans;
};

maxTwoEvents([[1,3,2],[4,5,2],[2,4,3]]);
maxTwoEvents([[1,3,2],[4,5,2],[1,5,5]]);
maxTwoEvents([[1,5,3],[1,5,1],[6,6,5]]);
