function removeDuplicates(nums: number[]): number {
    let write: number = 1;
    let count: number = 1;
    for (let read: number = 1; read < nums.length; read++) {
        if (nums[read] == nums[read - 1]) {
            count++;
        } else count = 1;

        if (count <= 2) nums[write++] = nums[read];
    }
    console.log(nums);
    console.log(write);
    return write;
};

removeDuplicates([1,1,1,2,2,3]);
removeDuplicates([0,0,1,1,1,1,2,3,3]);
