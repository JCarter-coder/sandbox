function isAnagram(s: string, t: string): boolean {
    let result: boolean = false;

    if (s.length !== t.length) {
        console.log(result);
        return result;
    }

    const sLetters: number[] = new Array(26).fill(0);
    const tLetters: number[] = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        sLetters[s.charCodeAt(i) - 97]++ || 1;
        tLetters[t.charCodeAt(i) - 97]++ || 1;
    }

    // assume true and change to false if the difference
    // between number of letters isn't zeroed out

    result = true;

    for (let i = 0; i < 26; i++) {
        if (sLetters[i] - tLetters[i] !== 0) {
            result = false;
            break;
        }
    }

    //console.log(sLetters);
    //console.log(tLetters);

    console.log(result);
    return result;
};

isAnagram("anagram","nagaram");
isAnagram("rat","car");
