var reversePrefix = function(word, ch) {
    let indexCh = word.indexOf(ch);
    
    if (indexCh === -1) {
        console.log(word);
        return word;
    }

    let result = "";

    for (let i = 0; i < word.length; i++) {
        if (i <= indexCh) {
            result += word[indexCh - i];
        } else {
            result += word[i];
        }
    }
    console.log(result);
    return result;
};

reversePrefix("abcdefd","d");
reversePrefix("xyxzxe","z");
reversePrefix("abcd", "z");
