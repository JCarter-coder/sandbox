var removeInterval = function(intervals, toBeRemoved) {
    let beginCut = toBeRemoved[0];
    let endCut = toBeRemoved[1];
    let answer = [];
    //console.log(`Begin cut at ${beginCut}, end at ${endCut}.`)
    // iterate through intervals array
    for (let i = 0; i < intervals.length; i++) {
        // if toBeRemoved interval starts after selected interval,
        // or ends before selected interval,
        // push selected interval and continue
        if (beginCut >= intervals[i][1] || endCut <= intervals[i][0]) {
            answer.push(intervals[i]);
            continue;
        }
        // else if the toBeRemoved interval starts before or at the start of
        // the selected interval and ends inside of the selected interval,
        // push the remaining part of the i interval
        else if (beginCut <= intervals[i][0] && endCut < intervals[i][1]) {
            answer.push([endCut, intervals[i][1]]);
        } 
        // else if toBeRemoved interval starts within the selected interval,
        // and ends inside of the selected interval,
        // push 2 intervals: the first segment and the remaining segment
        else if (beginCut > intervals[i][0] && endCut < intervals[i][1]) {
            answer.push([intervals[i][0], beginCut]);
            answer.push([endCut, intervals[i][1]]);
        } 
        // else if toBeRemoved interval starts within the selected interval,
        // and ends outside of the selected interval,
        // push the first part of the i interval
        else if (beginCut > intervals[i][0] && endCut >= intervals[i][1]) {
            answer.push([intervals[i][0], beginCut]);
        } 
        //else if toBeRemoved interval
        else continue;
    }
    console.log(answer);
};

removeInterval([[0,2],[3,4],[5,7]],[1,6]);
removeInterval([[0,5]],[2,3]);
removeInterval([[-5,-4],[-3,-2],[1,2],[3,5],[8,9]],[-1,4]);
