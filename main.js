"use strict";
function findDifferentBinaryString(nums) {
    let result = "";
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i].charAt(i);
        result += (current === '0' ? '1' : '0');
    }
    console.log(result);
    return result;
}
;
findDifferentBinaryString(["01", "10"]);
findDifferentBinaryString(["00", "01"]);
findDifferentBinaryString(["111", "011", "001"]);
