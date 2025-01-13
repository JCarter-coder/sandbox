type LetterCount = {
    [letter: string]: number,
}

function minimumLength(s: string): number {
    const memo: LetterCount = {};

    for (let i = 0; i < s.length; i++) {
        memo[s.charAt(i)] > 0 ? memo[s.charAt(i)]++ : memo[s.charAt(i)] = 1;
    }

    let result: number = s.length;

    for (let key of Object.keys(memo)) {
        while (memo[key] > 2) {
            memo[key] -= 2;
            result -= 2;
        }
    }

    console.log(result);

    return result;
};

minimumLength("abaacbcbb");
minimumLength("aa");
