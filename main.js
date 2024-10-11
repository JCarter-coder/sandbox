/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    const leavingTime = new Array(times.length).fill(-1);
    const target = times[targetFriend][0];
    times.sort((a,b) => a[0] - b[0]);

    for (let [arrival, leave] of times) {
        let i = 0;
        while (leavingTime[i] > arrival && leavingTime[i] !== -1) i++;
        if (arrival === target) {
            console.log(i);
            return i;
        }
        leavingTime[i] = leave;
    }

    console.log(-1);
};

smallestChair([[1,4],[2,3],[4,6]],1);
smallestChair([[3,10],[1,5],[2,6]],0);
