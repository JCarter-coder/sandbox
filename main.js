/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    // Convert to minutes and store in list
    const vec = timePoints.map(timePoint => {
        const [h, m] = timePoint.split(':').map(Number);
        return h * 60 + m;
    });

    // Sort the time points
    vec.sort((a,b) => a - b);

    // Calculate the minimum difference
    let res = Infinity;
    for (let i = 1; i < vec.length; i++) {
        res = Math.min(vec[i] - vec[i - 1], res);
    }

    // Handle the circular case
    console.log(Math.min(res, 1440 + vec[0] - vec[vec.length - 1]));
    return Math.min(res, 1440 + vec[0] - vec[vec.length - 1]);
};

findMinDifference(["23:59","00:00"]);
findMinDifference(["00:00","23:59","00:00"]);
