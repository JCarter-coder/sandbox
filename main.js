var generateAbbreviations = function(word) {
    let N = word.length;
    const abbreviations = [];
    
    for (let mask = 0; mask < (1 << N); mask++) {
        let currWord = "";
        let abbreviatedCount = 0;

        for (let index = 0; index < N; index++) {
            if ((mask & (1 << index)) != 0) abbreviatedCount++;
            else {
                if (abbreviatedCount > 0) {
                    currWord += abbreviatedCount;
                    abbreviatedCount = 0;
                }
                currWord += word.charAt(index);
            }
        }

        if (abbreviatedCount > 0) currWord += abbreviatedCount;

        abbreviations.push(currWord);
    }

    console.log(abbreviations);
};

generateAbbreviations("word");
generateAbbreviations("a");
