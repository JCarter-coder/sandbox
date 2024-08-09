var maxVowels = function(s, k) {
    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
    let answer = 0;
    let numVowels = 0;
    let right = 0;

    for (let left = 0; left <= s.length - k; left++) {
        while (right - left < k) {
            numVowels += VOWELS.has(s[right++]) ? 1 : 0;
        }
        answer = Math.max(answer, numVowels);
        numVowels -= VOWELS.has(s[left]) ? 1 : 0;
    }

    console.log(answer);
};

maxVowels("abciiidef",3);
maxVowels("aeiou",2);
maxVowels("leetcode",3);
maxVowels("weallloveyou",7) // 4
