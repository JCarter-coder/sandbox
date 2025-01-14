function equalDigitFrequency(s: string): number {
    const N = s.length;
    let prime: number = 31;
    let mod = 1000000000;
    const validSubstringHashes = new Set();

    for (let start = 0; start < N; start++) {
        let digitFrequency = new Array(10).fill(0);
        let uniqueDigitCount = 0;
        let substringHash = 0;
        let maxDigitFrequency = 0;

        for (let end = start; end < N; end++) {
            let currentDigit = s.charCodeAt(end) - 48;

            if (digitFrequency[currentDigit] === 0) uniqueDigitCount++;

            digitFrequency[currentDigit]++;
            maxDigitFrequency = Math.max(
                maxDigitFrequency,
                digitFrequency[currentDigit]
            );

            substringHash = (prime * substringHash + currentDigit + 1) % mod;

            if (maxDigitFrequency * uniqueDigitCount === end - start + 1) {
                validSubstringHashes.add(substringHash);
            }
        }
    }

    console.log(validSubstringHashes.size);
    return validSubstringHashes.size;
};

equalDigitFrequency("1212");
equalDigitFrequency("12321");
