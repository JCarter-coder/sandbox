"use strict";
function triangleType(nums) {
    let a = nums[0];
    let b = nums[1];
    let c = nums[2];
    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log("none");
        return "none";
    }
    else if (a === b && b === c) {
        console.log("equilateral");
        return "equilateral";
    }
    else if (a === b || a === c || b === c) {
        console.log("isosceles");
        return "isosceles";
    }
    else {
        console.log("scalene");
        return "scalene";
    }
}
;
triangleType([3, 3, 3]);
triangleType([3, 4, 5]);
