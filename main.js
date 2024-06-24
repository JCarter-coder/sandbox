var numberOfSpecialSubstrings = function(s) {
    let substringCount = 0;
    let start = 0;
    const freq = new Array(26).fill(0);

    for (let end = 0; end < s.length; end++) {
        freq[s.charCodeAt(end) - 97]++;

        while (freq[s.charCodeAt(end) - 97] > 1) {
            freq[s.charCodeAt(start) - 97]--;
            start++;
        }

        substringCount += (end - start + 1);
    }

    console.log(substringCount);
};

numberOfSpecialSubstrings("abcd");
numberOfSpecialSubstrings("ooo");
numberOfSpecialSubstrings("abab");
