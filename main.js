"use strict";
function canConstruct(ransomNote, magazine) {
    let result = false;
    if (ransomNote.length > magazine.length) {
        console.log(result);
        return result;
    }
    // Populate container with letters needed for ransomNote
    const container = {};
    for (let i = 0; i < ransomNote.length; i++) {
        if (!container[ransomNote.charAt(i)]) {
            container[ransomNote.charAt(i)] = 1;
        }
        else
            container[ransomNote.charAt(i)]++;
    }
    // Subtract letters available from magazine
    // If any letters become zero, remove
    // Any letter not available, return false
    let count = ransomNote.length;
    for (let i = 0; i < magazine.length; i++) {
        if (container[magazine.charAt(i)] &&
            container[magazine.charAt(i)] > 0) {
            container[magazine.charAt(i)]--;
            count--;
        }
        if (count === 0) {
            result = true;
            break;
        }
    }
    console.log(container);
    console.log(result);
    return result;
}
;
canConstruct("a", "b");
canConstruct("aa", "ab");
canConstruct("aa", "aab");
