function longestPalindrome(words: string[]): number {
    const stringCount: {[key: string]: number } = {};
    for (const word of words) {
        console.log(word);
        stringCount[word] = stringCount[word] + 1 || 1;
    }
    console.log(stringCount);
    let result = 0;
    let central = false;
    Object.keys(stringCount).forEach((key) => {
        if (key.charAt(0) === key.charAt(1)) {
            console.log(key, stringCount[key]);
            if (stringCount[key] % 2 === 0) {
                result += stringCount[key];
            }
            else {
                result += stringCount[key] - 1;
                central = true;
            }
        } else if (key.charAt(0) < key.charAt(1)) {
            const reverseKey = key.split('').reverse().join('');
            if (stringCount[reverseKey]) {
                result += Math.min(stringCount[key], stringCount[reverseKey]) * 2;
            }
        }
    })
    if (central) {
        result++;
    }
    console.log(result * 2);
    return result * 2;
};

//longestPalindrome(["lc","cl","gg"]);
//longestPalindrome(["ab","ty","yt","lc","cl","ab"]);
//longestPalindrome(["cc","ll","xx"]);
longestPalindrome(["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]);
