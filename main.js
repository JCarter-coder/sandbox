var commonChars = function(words) {
    let commonLetters = new Array(26).fill(0);
    let currentLetterCounts = new Array(26);
    let totalWords = words.length;
    let result = [];

    // iterate through chars of first word
    for (let ch of words[0]) {
        commonLetters[ch.charCodeAt(0) - 97]++;
    }

    // update commonLetters by keeping the minimum
    // count of common letters seen in each word
    for (let i = 1; i < totalWords; i++) {
        currentLetterCounts.fill(0);

        for (let ch of words[i]) {
            currentLetterCounts[ch.charCodeAt(0) - 97]++;
        }

        for (let letter = 0; letter < 26; letter++) {
            commonLetters[letter] = Math.min(
                commonLetters[letter], 
                currentLetterCounts[letter]
            );
        }
    }

    // collect the common letters in an array
    for (let letter = 0; letter < 26; letter++) {
        for (
            let commonCount = 0;
            commonCount < commonLetters[letter];
            commonCount++
        ) {
            result.push(String.fromCharCode(letter + 97));
        }
    }

    console.log(result);
};

commonChars(["bella","label","roller"]);
commonChars(["cool","lock","cook"]);
