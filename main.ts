function compressedString(word: string): string {
    let comp: string = "";
    let index = 0;
    while (index < word.length) {
        let comparisonChar = word.charAt(index++);
        let count = 1;
        while (word.charAt(index) === comparisonChar && count < 9) {
            count++;
            index++;
        }
        comp += count + comparisonChar;
    }
    console.log(comp);
    return comp;
};

compressedString("abcde");
compressedString("aaaaaaaaaaaaaabb");
