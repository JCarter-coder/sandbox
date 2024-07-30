var minimumDeletions = function(s) {
    let N = s.length;
    let minDeletions = 0;
    let bCount = 0;

    for (let i = 0; i < N; i++) {
        if (s.charAt(i) === 'b') bCount++;
        else minDeletions = Math.min(minDeletions + 1, bCount);
    }

    console.log(minDeletions);
};

minimumDeletions("aababbab");
minimumDeletions("bbaaaaabb");
