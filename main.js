var missingRolls = function(rolls, mean, n) {
    let m = rolls.length;
    let mSum = 0;
    for (let roll of rolls) {
        mSum += roll;
    }
    // Find the n remaining sum of rolls
    let nSum = mean * (m + n) - mSum;

    if (nSum > 6 * n || nSum < n) {
        // Not possible, return an empty array
        console.log([]);
        return [];
    }

    // Calculate the average integer value of a n-roll
    let nAvg = Math.floor(nSum / n);
    // Calculate the remainder of nSum
    let nRemainder = nSum % n;

    const result = new Array(n).fill(nAvg);
    
    for (let i = 0; i < nRemainder; i++) {
        result[i]++
    }

    console.log(result);
};

missingRolls([3,2,4,3],4,2);
missingRolls([1,5,6],3,4);
missingRolls([1,2,3,4],6,4);
missingRolls([6,3,4,3,5,3],1,6);
missingRolls([4,5,6,2,3,6,5,4,6,4,5,1,6,3,1,4,5,5,3,2,3,5,3,2,1,5,4,3,5,1,5],4,40);
