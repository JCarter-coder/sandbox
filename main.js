"use strict";
function longestCommonPrefix(strs) {
    let common = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let index = 0;
        let shorterString;
        if (strs[i].length < common.length)
            shorterString = strs[i];
        else
            shorterString = common;
        while (index < shorterString.length) {
            // if 
            if (strs[i][index] === common[index]) {
                index++;
                continue;
            }
            else {
                break;
            }
        }
        common = common.substring(0, index);
        console.log(common);
    }
    return "";
}
;
longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
