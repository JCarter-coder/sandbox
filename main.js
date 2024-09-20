/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let hashBase = 29;
    let modValue = 1e9 + 7;
    let forwardHash = 0;
    let reverseHash = 0;
    let powerValue = 1;
    let palindromeEndIndex = -1;

    for (let i = 0; i < s.length; i++) {
        let currentChar = s.charCodeAt(i);
        
        // Update forward hash
        forwardHash = (forwardHash * hashBase + (currentChar - 97 + 1)) % modValue;

        // Update reverse hash
        reverseHash = (reverseHash + (currentChar - 97 + 1) * powerValue) % modValue;
        powerValue = (powerValue * hashBase) % modValue;

        // If forward and reverse hashes match, update end index
        if (forwardHash === reverseHash) palindromeEndIndex = i;
    }

    let suffix = s.substring(palindromeEndIndex + 1);
    let reversedSuffix = "";

    for (let i = suffix.length - 1; i >= 0; i--) {
        reversedSuffix += suffix.charAt(i);
    }

    console.log(reversedSuffix.concat(s));
};

shortestPalindrome("aacecaaa");
shortestPalindrome("abcd");
