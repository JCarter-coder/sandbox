"use strict";
function minimumSize(nums, maxOperations) {
    let left = 1;
    let right = 0;
    const isPossible = (maxBallsInBag, nums, maxOperations) => {
        let totalOperations = 0;
        for (let num of nums) {
            let operations = Math.ceil(num / maxBallsInBag) - 1;
            totalOperations += operations;
            if (totalOperations > maxOperations)
                return false;
        }
        return true;
    };
    for (let num of nums) {
        right = Math.max(right, num);
    }
    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        if (isPossible(middle, nums, maxOperations)) {
            right = middle;
        }
        else {
            left = middle + 1;
        }
    }
    console.log(left);
    return left;
}
;
minimumSize([9], 2);
minimumSize([2, 4, 8, 2], 4);
