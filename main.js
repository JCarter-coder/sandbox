var reversePrefix = function(word, ch) {
    let indexCh = word.indexOf(ch);
    let result = "";
    
    if (indexCh === -1) {
        console.log(word);
        return word;
    } else {
        for (let i = indexCh; i >= 0; i--) {
            result += word[i];
        }
        for (let j = indexCh + 1; j < word.length; j++) {
            result += word[j];
        }
    }
    console.log(result);
    return result;
};

reversePrefix("abcdefd","d");
reversePrefix("xyxzxe","z");
reversePrefix("abcd", "z");
