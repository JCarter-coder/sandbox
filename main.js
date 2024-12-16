"use strict";
function wordPattern(pattern, s) {
    let result = true;
    const sArray = s.split(' ');
    const mapped = new Array(26);
    for (let index = 0; index < 26; index++) {
        mapped[index] = false;
    }
    for (let i = 0; i < pattern.length; i++) {
        if (mapped[pattern.charCodeAt(i) - 97] === false) {
            if (mapped.find((word) => word === sArray[i])) {
                result = false;
                break;
            }
            else
                mapped[pattern.charCodeAt(i) - 97] = sArray[i];
        }
        else if (mapped[pattern.charCodeAt(i) - 97] !== sArray[i]) {
            result = false;
            break;
        }
    }
    console.log(result);
    return result;
}
;
wordPattern("abba", "dog cat cat dog");
wordPattern("abba", "dog cat cat fish");
wordPattern("aaaa", "dog cat cat dog");
wordPattern("abba", "dog dog dog dog");
