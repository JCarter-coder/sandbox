"use strict";
function hIndex(citations) {
    citations.sort((a, b) => a - b);
    let h = 0;
    while (h < citations.length &&
        citations[citations.length - 1 - h] > h) {
        h++;
    }
    console.log(h);
    return h;
}
;
hIndex([3, 0, 6, 1, 5]);
hIndex([1, 3, 1]);
hIndex([100]);
