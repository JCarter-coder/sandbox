function minOperations(nums: number[], k: number): number {
    const numsSet = new Set();
    for (let num of nums) {
        if (num < k) {
            console.log(-1);
            return -1;
        } else if (num > k) {
            numsSet.add(num);
        }
    }
    let result = numsSet.size;
    console.log(result);
    return result;
};

minOperations([5,2,5,4,5],2);
minOperations([2,1,2],2);
minOperations([9,7,5,3],1);
minOperations([1],1)
