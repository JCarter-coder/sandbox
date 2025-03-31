"use strict";
function shortestWay(source, target) {
    const sourceChars = new Array(26);
    for (let i = 0; i < source.length; i++) {
        sourceChars[source.charCodeAt(i) - 97] = true;
    }
    for (let i = 0; i < target.length; i++) {
        if (!sourceChars[target.charCodeAt(i) - 97]) {
            console.log(-1);
            return -1;
        }
    }
    let m = source.length;
    let sourceIterator = 0;
    let count = 0;
    for (let i = 0; i < target.length; i++) {
        if (sourceIterator === 0) {
            count++;
        }
        while (source.charCodeAt(sourceIterator) !== target.charCodeAt(i)) {
            sourceIterator = (sourceIterator + 1) % m;
            if (sourceIterator === 0)
                count++;
        }
        sourceIterator = (sourceIterator + 1) % m;
    }
    console.log(count);
    return count;
}
;
shortestWay("abc", "abcbc");
shortestWay("abc", "acdbc");
shortestWay("xyz", "xzyxz");
