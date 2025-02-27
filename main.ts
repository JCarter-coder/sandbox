function minOperations(nums: number[], k: number): number {
    nums.sort((x, y) => x - y);
    const b: number[] = [];
    for(let i = 0, j = 0, count = 0, x, y; ; ++count) {
        if (i < nums.length && !(nums[i] > b[j])) x = nums[i++];
        else x = b[j++];
        if (!(k > x)) return count;
        if (i < nums.length && !(nums[i] > b[j])) y = nums[i++];
        else y = b[j++];
        b.push(x * 2 + y);
    }
    return -1;
};

minOperations([2,11,10,1,3],10);
minOperations([1,1,2,4,9],20);
