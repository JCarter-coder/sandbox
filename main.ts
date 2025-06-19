function partitionArray(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let result = 1;
    let rec = nums[0];
    for (let num of nums) {
        if (num - rec > k) {
            result++;
            rec = num;
        }
    }
    console.log(result);
    return result;
};

partitionArray([3,6,1,2,5],2);
partitionArray([1,2,3],1);
partitionArray([2,2,4,5],0);
