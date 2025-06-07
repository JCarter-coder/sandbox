function answerString(word: string, numFriends: number): string {
    const lastSubstring = (s: string): string => {
        let i = 0;
        let j = 1;
        let n = s.length;
        while (j < n) {
            let k = 0;
            while (j + k < n && s[i + k] === s[j + k]) {
                k++;
            }
            if (j + k < n && s[i + k] < s[j + k]) {
                let t = i;
                i = j;
                j = Math.max(j + 1, t + k + 1);
            } else {
                j += k + 1;
            }
        }
        return s.substring(i, n);
    }
    
    if (numFriends === 1) {
        console.log(word);
        return word;
    }
    let last: string = lastSubstring(word);
    let n: number = word.length;
    let m: number = last.length;
    console.log(last.substring(0, Math.min(n - numFriends + 1, m)));
    return last.substring(0, Math.min(n - numFriends + 1, m));
};

answerString("dbca",2);
answerString("gggg",4);
