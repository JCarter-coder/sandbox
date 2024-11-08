/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let current = start;
        let prev = nums[start];
        do {
            let next = (current + k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (start !== current);
    }
    console.log(nums);
 };

 rotate([1,2,3,4,5,6,7],3);
 rotate([-1,-100,3,99],2);
 rotate([1,2,3,4,5,6],2);
