var numberOfSubstrings = function(s) {
    let answer = 0;
    const prefixCount = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        prefixCount[s.charCodeAt(i) - 97]++;
        answer += prefixCount[s.charCodeAt(i) - 97];
    }
    console.log(answer);
};

numberOfSubstrings("abcba");
numberOfSubstrings("abacad");
numberOfSubstrings("a");
