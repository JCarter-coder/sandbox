function rotateString(s: string, goal: string): boolean {
    let ans: boolean = false;
    if (s.length !== goal.length) {
        console.log(ans);
        return ans;
    }
    
    let doubleString = s + s;
    ans = doubleString.includes(goal);
    console.log(ans);
    return ans;
};

rotateString("abcde","cdeab");
rotateString("abcde","abced");
