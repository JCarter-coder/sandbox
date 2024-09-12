/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let consistentCount = 0;

    for (let word of words) {
        let isWordConsistent = true;

        for (let i = 0; i < word.length; i++) {
            let currentChar = word.charAt(i);
            let isCharAllowed = false;

            for (let j = 0; j < allowed.length; j++) {
                if (allowed.charAt(j) === currentChar) {
                    isCharAllowed = true;
                    break;
                }
            }

            if (!isCharAllowed) {
                isWordConsistent = false;
                break;
            }
        }

        if (isWordConsistent) {
            consistentCount++;
        }
    }

    console.log(consistentCount);
};

countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]);
countConsistentStrings("abc",["a","b","c","ab","ac","bc","abc"]);
countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"]);
