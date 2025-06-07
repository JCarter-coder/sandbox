"use strict";
function clearStars(s) {
    const cnt = new Array(26)
        .fill(0)
        .map(() => []);
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "*") {
            cnt[arr[i].charCodeAt(0) - 97].push(i);
        }
        else {
            for (let j = 0; j < 26; j++) {
                if (cnt[j].length > 0) {
                    arr[cnt[j].pop()] = "*";
                    break;
                }
            }
        }
    }
    let result = arr.filter(c => c !== "*").join("");
    console.log(result);
    return result;
}
;
clearStars("aaba*");
clearStars("abc");
