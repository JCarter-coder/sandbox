function addSpaces(s: string, spaces: number[]): string {
    let ans: string = "";
    let currentSpaceIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (spaces[currentSpaceIndex] === i) {
            ans += ' ';
            currentSpaceIndex++;
        }
        ans += s.charAt(i);
    }
    console.log(ans);
    return ans;
};

addSpaces("LeetcodeHelpsMeLearn",[8,13,15]);
addSpaces("icodeinpython",[1,5,7,9]);
addSpaces("spacing",[0,1,2,3,4,5,6]);
