"use strict";
function countDays(days, meetings) {
    let freeDays = 0;
    let latestEnd = 0;
    meetings.sort((a, b) => a[0] - b[0]);
    for (let meeting of meetings) {
        let start = meeting[0];
        let end = meeting[1];
        if (start > latestEnd + 1) {
            freeDays += start - latestEnd - 1;
        }
        latestEnd = Math.max(latestEnd, end);
    }
    freeDays += days - latestEnd;
    console.log(freeDays);
    return freeDays;
}
;
countDays(10, [[5, 7], [1, 3], [9, 10]]);
countDays(5, [[2, 4], [1, 3]]);
countDays(6, [[1, 6]]);
