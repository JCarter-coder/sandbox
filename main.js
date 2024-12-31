"use strict";
function mincostTickets(days, costs) {
    let lastDay = days[days.length - 1];
    const dp = new Array(lastDay + 1).fill(0);
    let i = 0;
    for (let day = 1; day <= lastDay; day++) {
        if (day < days[i])
            dp[day] = dp[day - 1];
        else {
            i++;
            dp[day] = Math.min(dp[day - 1] + costs[0], Math.min(dp[Math.max(0, day - 7)] + costs[1], dp[Math.max(0, day - 30)] + costs[2]));
        }
    }
    console.log(dp[lastDay]);
    return dp[lastDay];
}
;
mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]);
mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]);
