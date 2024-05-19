var maximumValueSum = function(nums, k, edges) {
    let totalSum = 0;
    let count = 0;
    let positiveMin = Infinity;
    let negativeMax = -Infinity;

    for (let nodeValue of nums) {
        let nodeValAfterOperation = nodeValue ^ k;
        totalSum += nodeValue;
        let netChange = nodeValAfterOperation - nodeValue;

        if (netChange > 0) {
            positiveMin = Math.min(positiveMin, netChange);
            totalSum += netChange;
            count++;
        } else {
            negativeMax = Math.max(negativeMax, netChange);
        }
    }

    if (count % 2 === 0) {
        console.log(totalSum);
        return totalSum;
    }
    console.log(Math.max(totalSum - positiveMin, totalSum + negativeMax))
    return Math.max(totalSum - positiveMin, totalSum + negativeMax);
};

maximumValueSum([1,2,1],3,[[0,1],[0,2]]);
maximumValueSum([2,3],7,[[0,1]]);
maximumValueSum([7,7,7,7,7,7],3,[[0,1],[0,2],[0,3],[0,4],[0,5]]);
