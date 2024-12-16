function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    const sortedNumsWithIndex: [number, number][] = new Array();
    const N = nums.length;

    // Initialize sortedNumsWithIndex array
    for (let index = 0; index < N; index++) {
        sortedNumsWithIndex.push([nums[index], index]);
    }
    sortedNumsWithIndex.sort((a,b) => a[0] - b[0]);

    // multiply smallest value of each iteration, k times
    while (k-- > 0) {
        let smallestValueIndex: number = sortedNumsWithIndex[0][1];
        nums[smallestValueIndex] = nums[smallestValueIndex] * multiplier;
        // update sortedNumsWithIndex
        sortedNumsWithIndex[0] = [nums[smallestValueIndex], smallestValueIndex];
        sortedNumsWithIndex.sort((a,b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0];
            }

            return a[1] - b[1];
        });
    }

    console.log(nums)
    return nums;
};

getFinalState([2,1,3,5,6],5,2);
getFinalState([1,2],3,4);
getFinalState([1,3,5],5,3);
