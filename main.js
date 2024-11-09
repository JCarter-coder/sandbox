"use strict";
function lengthOfLastWord(s) {
    let index = s.length - 1;
    let lastStringLength = 0;
    while (index >= 0 && s.charAt(index) === ' ') {
        index--;
    }
    while (index >= 0 && s.charAt(index) !== ' ') {
        lastStringLength++;
        index--;
    }
    console.log(lastStringLength);
    return lastStringLength;
}
;
lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");
