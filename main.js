var wordPatternMatch = function(pattern, s) {
    const symbolMap = new Map();
    const wordSet = new Set();

    function isMatch(s, sIndex, pattern, pIndex, symbolMap, wordSet) {
        // Base Case: reached end of pattern
        if (pIndex === pattern.length) {
            return sIndex === s.length // true iff reached end of s
        }

        // Get current pattern character
        let symbol = pattern.charAt(pIndex);

        // This symbol already has an associated word
        if (symbolMap.has(symbol)) {
            let word = symbolMap.get(symbol);
            // Check is we can use it to match
            // s[sIndex...sIndex + word.length]
            if (!s.startsWith(word, sIndex)) {
                return false;
            }
            // If it matches continue to match the rest
            return isMatch(s, sIndex + word.length, pattern, 
                pIndex + 1, symbolMap, wordSet);
        }

        // This symbol does not exist in the map
        for (let k = sIndex + 1; k <= s.length; k++) {
            let newWord = s.substring(sIndex, k);
            if (wordSet.has(newWord)) {
                continue;
            }
            // Create or update it
            symbolMap.set(symbol, newWord);
            wordSet.add(newWord);
            // Continue to match the rest
            if (isMatch(s, k, pattern, pIndex + 1, symbolMap, wordSet)) {
                return true;
            }
            // Backtracking
            symbolMap.delete(symbol);
            wordSet.delete(newWord);
        }
        // No mappings were valid
        return false;
    }

    let result = isMatch(s, 0, pattern, 0, symbolMap, wordSet);
    console.log(result);
    return result;
};

wordPatternMatch("abab","redblueredblue");
wordPatternMatch("aaaa","asdasdasdasd");
wordPatternMatch("aabb","xyzabcxzyabc");
