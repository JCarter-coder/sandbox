function rotateString(s: string, goal: string): boolean {
    let ans: boolean = false;
    if (s === goal) {
        ans = true;
        console.log(ans);
        return ans;
    }
    for (let i = 1; i < s.length; i++) {
        s = s.substring(1) + s.charAt(0);
        if (s === goal) {
            ans = true;
            break;
        }
    }
    console.log(ans);
    return ans;
};

rotateString("abcde","cdeab");
rotateString("abcde","abced");
