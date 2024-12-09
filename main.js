"use strict";
function isArraySpecial(nums, queries) {
    const answer = new Array();
    const prefix = new Array(nums.length);
    prefix[0] = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 === nums[i - 1] % 2)
            prefix[i] = prefix[i - 1] + 1;
        else
            prefix[i] = prefix[i - 1];
    }
    console.log(prefix);
    for (let query of queries) {
        answer.push(prefix[query[1]] - prefix[query[0]] === 0);
    }
    console.log(answer);
    return answer;
}
;
isArraySpecial([3, 4, 1, 2, 6], [[0, 4]]);
isArraySpecial([4, 3, 1, 6], [[0, 2], [2, 3]]);
