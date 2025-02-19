"use strict";
function getHappyString(n, k) {
    let result = new Array();
    let happyString = (num, str) => {
        if (result.length >= k)
            return;
        if (num === 1) {
            result.push(str);
            return;
        }
        if (str[str.length - 1] !== 'a')
            happyString(num - 1, str + 'a');
        if (str[str.length - 1] !== 'b')
            happyString(num - 1, str + 'b');
        if (str[str.length - 1] !== 'c')
            happyString(num - 1, str + 'c');
    };
    happyString(n, 'a');
    happyString(n, 'b');
    happyString(n, 'c');
    console.log(result[k - 1] || "");
    return result[k - 1] || "";
}
;
getHappyString(1, 3);
getHappyString(1, 4);
getHappyString(3, 9);
