function repeatLimitedString(s: string, repeatLimit: number): string {
    let N = s.length;
    const lettersUsed: number[] = new Array(26).fill(0);
    let result: string = "";

    for (let i = 0; i < N; i++) {
        lettersUsed[s.charCodeAt(i) - 97] = (
            lettersUsed[s.charCodeAt(i) - 97] === 0 ?
            1 : 
            lettersUsed[s.charCodeAt(i) - 97] + 1
        );
    }

    // build string from lettersUsed, start from end
    // and track the remaining letters of largest index
    let currentCharIndex = 25

    while (currentCharIndex >= 0) {
        if (lettersUsed[currentCharIndex] === 0) {
            currentCharIndex--;
            continue;
        }

        let use = Math.min(lettersUsed[currentCharIndex], repeatLimit);

        for (let k = 0; k < use; k++) {
            result += String.fromCharCode(currentCharIndex + 97);
        }

        lettersUsed[currentCharIndex] -= use;

        if (lettersUsed[currentCharIndex] > 0) {
            let smallerCharIndex = currentCharIndex - 1;
            while (
                smallerCharIndex >= 0 &&
                lettersUsed[smallerCharIndex] === 0
            ) {
                smallerCharIndex--;
            }
            if (smallerCharIndex < 0) break;
            result += String.fromCharCode(smallerCharIndex + 97);
            lettersUsed[smallerCharIndex]--;
        }
    }

    console.log(result);
    return result
};

repeatLimitedString("cczazcc",3);
repeatLimitedString("aababab",2);
