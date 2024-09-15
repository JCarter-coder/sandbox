/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let prefixXOR = 0;
    const characterMap = new Array(26).fill(0);
    // Set a, e, i, o, u (i.e. 0, 4, 8, 14, 20)
    characterMap[0] = 1;
    characterMap[4] = 2;
    characterMap[8] = 4;
    characterMap[14] = 8;
    characterMap[20] = 16;
    const mp = new Array(32).fill(-1);
    let longestSubstring = 0;
    for (let i = 0; i < s.length; i++) {
        prefixXOR ^= characterMap[s.charCodeAt(i) - 97];
        if (mp[prefixXOR] === -1 && prefixXOR !== 0) mp[prefixXOR] = i;
        longestSubstring = Math.max(longestSubstring, i - mp[prefixXOR]);
    }
    console.log(longestSubstring);
};

findTheLongestSubstring("eleetminicoworoep");
findTheLongestSubstring("leetcodeisgreat");
findTheLongestSubstring("bcbcbc");
