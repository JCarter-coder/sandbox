var appendCharacters = function(s, t) {
    let first = 0;
    let longestPrefix = 0;
    while (first < s.length && longestPrefix < t.length) {
        if (s.charAt(first) === t.charAt(longestPrefix)) {
            longestPrefix++;
        }
        first++;
    }
    console.log(t.length - longestPrefix);
};

appendCharacters("coaching","coding");
appendCharacters("abcde","a");
appendCharacters("z","abcde");
