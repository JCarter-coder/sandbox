function tupleSameProduct(nums: number[]): number {
    const N: number = nums.length;
    const productFreq = new Map();
    let result: number = 0;

    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            productFreq.get(nums[i] * nums[j]) === undefined ?
            productFreq.set(nums[i] * nums[j], 1):
            productFreq.set(nums[i] * nums[j], productFreq.get(nums[i] * nums[j]) + 1)
        }
    }

    for (const product of productFreq) {
        if (product[1] > 1) {
            result += 8 * ((product[1]- 1) * product[1]) / 2
        }
    }

    //console.log(productFreq);
    console.log(result);
    return result;
};

tupleSameProduct([2,3,4,6]);
tupleSameProduct([1,2,4,5,10]);
tupleSameProduct([2,3,4,6,8,12]);
