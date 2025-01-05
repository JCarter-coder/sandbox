function shiftingLetters(s: string, shifts: number[][]): string {
    const N: number = s.length;
    let finalShifts: number[] = new Array(N).fill(0);

    for (let shift of shifts) {
        if (shift[2] === 1) {
            finalShifts[shift[0]]++;
            if (shift[1] + 1 < N) finalShifts[shift[1] + 1]--;
        } else {
            finalShifts[shift[0]]--;
            if (shift[1] + 1 < N) finalShifts[shift[1] + 1]++;
        }
    }

    //console.log(finalShifts);
    let result: string = "";
    let numberOfShifts = 0;

    for (let i = 0; i < N; i++) {
        numberOfShifts = (numberOfShifts + finalShifts[i]) % 26;
        if (numberOfShifts < 0) numberOfShifts += 26;

        let shiftedCharacter = String.fromCharCode(
            97 + (s.charCodeAt(i) - 97 + numberOfShifts) % 26
        );
        result += shiftedCharacter;
    }

    console.log(result);
    return result;
};

shiftingLetters("abc",[[0,1,0],[1,2,1],[0,2,1]]);
shiftingLetters("dztz",[[0,0,0],[1,1,1]]);
