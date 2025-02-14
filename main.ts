function makePrefSumNonNegative(nums: number[]): number {
    let result: number = 0;
    let prefixSum = 0;
    const pq: number[] = new Array();

    for (let num of nums) {
        if (num < 0) {
            pq.push(num);
        }

        prefixSum += num;

        if (prefixSum < 0) {
            let smallestValue: number = Math.min(...pq);
            let smallestValueIndex = pq.indexOf(smallestValue);
            pq.splice(smallestValueIndex, 1);
            prefixSum -= smallestValue;
            result++;
        }
    }

    console.log(result);
    return result;
};

makePrefSumNonNegative([2,3,-5,4]);
makePrefSumNonNegative([3,-5,-2,6]);
