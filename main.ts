function countOfSubstrings(word: string, k: number): number {
    const isVowel = (c: string) => {
        return (
            c === 'a' ||
            c === 'e' ||
            c === 'i' ||
            c === 'o' ||
            c === 'u'
        );
    }

    const atLeastK = (
        word: string,
        k: number
    ): number => {
        let numValidSubstrings = 0;
        let start = 0;
        let end = 0;
        const vowelCount = new Map();
        let consonantCount = 0;

        while (end < word.length) {
            let newLetter = word.charAt(end);

            if (isVowel(newLetter)) {
                vowelCount.set(
                    newLetter,
                    (vowelCount.get(newLetter) || 0) + 1
                );
            } else consonantCount++;

            while (vowelCount.size === 5 && consonantCount >= k) {
                numValidSubstrings += word.length - end;
                let startLetter = word.charAt(start);
                if (isVowel(startLetter)) {
                    vowelCount.set(
                        startLetter,
                        vowelCount.get(startLetter) - 1
                    );
                    if (vowelCount.get(startLetter) === 0) {
                        vowelCount.delete(startLetter);
                    }
                } else consonantCount--;

                start++;
            }

            end++;
        }

        return numValidSubstrings;
    }

    console.log(atLeastK(word, k) - atLeastK(word, k + 1))
    return atLeastK(word, k) - atLeastK(word, k + 1);
};

countOfSubstrings("aeioqq",1);
countOfSubstrings("aeiou",0);
countOfSubstrings("ieaouqqieaouqq",1);
