"use strict";
function strStr(haystack, needle) {
    let index = -1;
    let N = needle.length;
    const isFirst = (str, sFind) => {
        if (str === sFind)
            return true;
        else
            return false;
    };
    for (let i = 0; i <= haystack.length - N; i++) {
        console.log(haystack.substring(i, i + N));
        if (isFirst(haystack.substring(i, i + N), needle)) {
            index = i;
            break;
        }
    }
    console.log(index);
    return index;
}
;
strStr("sadbutsad", "sad");
strStr("leetcode", "leeto");
