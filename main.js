var minimumPushes = function(word) {
    const freq = new Array(26).fill(0);
    word.split('');
    for (let c of word) {
        freq[c.charCodeAt(0) - 97]++;
    }
    freq.sort((a,b) => b - a);
    let totalPushes = 0;
    for (let i = 0; i < 26; i++) {
        if (freq[i] === 0) break;
        totalPushes += (Math.floor(i / 8) + 1) * freq[i];
    }
    console.log(totalPushes);
};

minimumPushes("abcde");
minimumPushes("xyzxyzxyzxyz");
minimumPushes("aabbccddeeffgghhiiiiii");
