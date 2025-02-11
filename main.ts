function removeOccurrences(s: string, part: string): string {

    const computeLongestPrefixSuffix = (pattern: string): number[] => {
        const lps: number[] = new Array(pattern.length).fill(0);

        for (let current = 1, prefixLength = 0; current < pattern.length;) {
            if (pattern.charAt(current) === pattern.charAt(prefixLength)) {
                lps[current] = ++prefixLength;
                current++;
            } else if (prefixLength !== 0) {
                prefixLength = lps[prefixLength - 1];
            } else {
                lps[current] = 0;
                current++;
            }
        }

        return lps;
    }

    const kmpLPS: number[] = computeLongestPrefixSuffix(part);
    const charStack: string[] = new Array();
    const patternIndexes: number[] = new Array(s.length + 1);

    for (
        let strIndex: number = 0, patternIndex: number = 0; 
        strIndex < s.length; 
        strIndex++
    ) {
        let currentChar: string = s.charAt(strIndex);
        charStack.push(currentChar);

        if (currentChar === part.charAt(patternIndex)) {
            patternIndexes[charStack.length] = ++patternIndex;

            if (patternIndex === part.length) {
                let remainingLength = part.length;
                while (remainingLength > 0) {
                    charStack.pop();
                    remainingLength--;
                }

                patternIndex = (charStack.length !== 0) ?
                    patternIndexes[charStack.length]:
                    0;
            }
        } else {
            if (patternIndex !== 0) {
                strIndex--;
                patternIndex = kmpLPS[patternIndex - 1];
                charStack.pop();
            } else {
                patternIndexes[charStack.length] = 0;
            }
        }
    }

    //console.log(startIndexForPart);
    console.log(charStack.join(""));
    return charStack.join("");
};

removeOccurrences("daabcbaabcbc","abc");
removeOccurrences("axxxxyyyyb","xy");
