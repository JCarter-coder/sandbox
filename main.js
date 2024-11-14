"use strict";
function reverseWords(s) {
    const strArray = [];
    // build array of only strings without spaces
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === ' ')
            continue;
        else {
            let temp = "";
            while (s.charAt(i) !== ' ' && i < s.length) {
                temp += s.charAt(i++);
            }
            strArray.push(temp);
        }
    }
    console.log(strArray);
    // reverse the string array
    for (let i = 0; i < strArray.length / 2; i++) {
        let temp = strArray[strArray.length - 1 - i];
        strArray[strArray.length - 1 - i] = strArray[i];
        strArray[i] = temp;
    }
    console.log(strArray.join(' '));
    return "";
}
;
reverseWords("the sky is blue");
reverseWords("  hello world  ");
reverseWords("a good   example");
