"use strict";
function clearDigits(s) {
    const resultQueue = new Array();
    for (let i = 0; i < s.length; i++) {
        if (!Number.isInteger(+s[i])) {
            resultQueue.push(s[i]);
        }
        else {
            resultQueue.pop();
        }
    }
    console.log(resultQueue.join(""));
    return resultQueue.join("");
}
;
clearDigits("abc");
clearDigits("cb34");
