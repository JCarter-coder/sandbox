function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
    let sum = 0;
    let count = 0;
    let positiveMinimum = (1 << 30);
    let negativeMaximum = -1 * (1 << 30);
    
    for (let nodeValue of nums) {
        let operatedNodeValue = nodeValue ^ k;
        sum += nodeValue;
        let netChange = operatedNodeValue - nodeValue;
        if (netChange > 0) {
            positiveMinimum = Math.min(positiveMinimum, netChange);
            sum += netChange;
            count++;
        } else {
            negativeMaximum = Math.max(negativeMaximum, netChange);
        }
    }

    if (count % 2 === 0) {
        console.log(sum);
        return sum;
    }

    console.log(Math.max(sum - positiveMinimum, sum + negativeMaximum))
    return Math.max(sum - positiveMinimum, sum + negativeMaximum);
};

maximumValueSum([1,2,3],3,[[0,1],[0,2]]);
maximumValueSum([2,3],7,[[0,1]]);
maximumValueSum([7,7,7,7,7,7],3,[[0,1],[0,2],[0,3],[0,4],[0,5]]);
