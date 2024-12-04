"use strict";
function convert(s, numRows) {
    if (numRows === 1) {
        console.log(s);
        return s;
    }
    const stringArray = new Array(numRows);
    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = [];
    }
    let ptr = 0;
    for (let i = 0; i < s.length; i++) {
        // reset pointer
        if (ptr === (2 * numRows - 2))
            ptr = 0;
        if (ptr < numRows) {
            // push char in downward zig
            stringArray[ptr].push(s.charAt(i));
        }
        else {
            // push char in diagonal zag
            stringArray[2 * numRows - 2 - ptr].push(s.charAt(i));
        }
        ptr++;
    }
    let zigzagString = "";
    for (let arr of stringArray) {
        for (let char of arr) {
            zigzagString += char;
        }
    }
    console.log(zigzagString);
    return zigzagString;
}
;
convert("PAYPALISHIRING", 3);
convert("PAYPALISHIRING", 4);
convert("A", 1);
convert("AB", 1);
