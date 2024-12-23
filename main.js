"use strict";
function isIsomorphic(s, t) {
    const charMap = new Map();
    const alreadyUsed = new Set();
    let result = false;
    for (let i = 0; i < s.length; i++) {
        if (charMap.has(s[i])) {
            if (charMap.get(s[i]) === t[i])
                continue;
            else {
                console.log(result);
                return result;
            }
        }
        else if (!alreadyUsed.has(t[i])) {
            charMap.set(s[i], t[i]);
            alreadyUsed.add(t[i]);
        }
        else {
            console.log(result);
            return result;
        }
        //console.log(charMap)
    }
    result = true;
    console.log(result);
    return result;
}
;
isIsomorphic("egg", "add");
isIsomorphic("foo", "bar");
isIsomorphic("paper", "title");
isIsomorphic("badc", "baba");
