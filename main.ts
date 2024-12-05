function isSubsequence(s: string, t: string): boolean {
    let result: boolean = false;
    let indexS: number = 0;
    let indexT: number = 0;

    // Edge case of empty string
    if (s.length === 0) {
        result = true;
        console.log(result);
        return result;
    }

    while (indexS < s.length && indexT < t.length) {
        if (s.charAt(indexS) === t.charAt(indexT)) indexS++;
        if (indexS > s.length - 1) {
            result = true;
            break;
        }
        indexT++;
    }

    console.log(result);
    return result;
};

isSubsequence("abc","ahbgdc");
isSubsequence("axc","ahbgdc");
