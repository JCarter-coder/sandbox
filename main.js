"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
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
    /* // first insertion point point
    let writeIndex = k;
    //let writeIndex = 0;
    let N = nums.length;
    // declare temp outside of loop
    let insertValue: number = nums[0];
    let temp: number;
    for (let i = 0; i < N; i++) {
        // start at index k and increment
        //nums[i + k] = nums[i];
        console.log(`${i}: ${writeIndex}`);
        console.log(`Insert Value: ${insertValue}`);
        temp = nums[writeIndex];
        nums[writeIndex] = insertValue;
        insertValue = temp;
        
        //nums[readIndex] = nums[writeIndex];
        //writeIndex = readIndex;
        if ((writeIndex + k) > N) {
            writeIndex = ((writeIndex + k) % N);
        }
        else writeIndex = ((writeIndex + k) % N);
        //temp = nums[readIndex]
        console.log(nums);
    } */
    console.log(nums);
}
;
rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 2);
rotate([1, 2, 3, 4, 5, 6], 2);
