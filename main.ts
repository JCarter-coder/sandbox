function numKLenSubstrNoRepeats(s: string, k: number): number {
    const alphabet: number[] = new Array(26).fill(0);
    let left = 0;
    let result: number = 0;

    for (let right = 0; right < s.length; right++) {
        alphabet[s.charCodeAt(right) - 97]++
        if (right + 1 - left === k) {
            //console.log(right - left);
            //console.log(alphabet);
            alphabet.every((x) => x <= 1) ? result++ : 0;
            alphabet[s.charCodeAt(left++) - 97]--;
        }
    }

    console.log(result);
    return result;
};

numKLenSubstrNoRepeats("havefunonleetcode",5);
numKLenSubstrNoRepeats("home",5);
