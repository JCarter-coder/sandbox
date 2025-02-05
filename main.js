"use strict";
function areAlmostEqual(s1, s2) {
    let result = false;
    let diffCount = 0;
    let index = 0;
    const indexTracker = new Array();
    while (index < s1.length) {
        if (s1[index] !== s2[index]) {
            diffCount++;
            indexTracker.push(index);
        }
        if (diffCount > 2)
            break;
        index++;
    }
    if (diffCount === 0)
        result = true;
    else if (diffCount === 2 &&
        s1[indexTracker[0]] === s2[indexTracker[1]] &&
        s1[indexTracker[1]] === s2[indexTracker[0]])
        result = true;
    console.log(result);
    return result;
}
;
areAlmostEqual("bank", "kanb");
areAlmostEqual("attack", "defend");
areAlmostEqual("kelb", "kelb");
areAlmostEqual("caa", "aaz");
areAlmostEqual("npv", "zpn");
