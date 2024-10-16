/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    let rangeStart = Number.MAX_SAFE_INTEGER;
    let rangeEnd = Number.MIN_SAFE_INTEGER;
    for (let interval of intervals) {
        rangeStart = Math.min(rangeStart, interval[0]);
        rangeEnd = Math.max(rangeEnd, interval[1]);
    }

    const pointToCount = new Array(rangeEnd + 2).fill(0);
    for (let interval of intervals) {
        pointToCount[interval[0]]++;
        pointToCount[interval[1] + 1]--;
    }

    let concurrentIntervals = 0;
    let maxConcurrentIntervals = 0;
    for (let i = rangeStart; i <= rangeEnd; i++) {
        concurrentIntervals += pointToCount[i];
        maxConcurrentIntervals = Math.max(
            maxConcurrentIntervals,
            concurrentIntervals
        );
    }
    console.log(maxConcurrentIntervals);
};

minGroups([[5,10],[6,8],[1,5],[2,3],[1,10]]);
minGroups([[1,3],[5,6],[8,10],[11,13]]);
