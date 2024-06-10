var isSubsequence = function(s, t) {
    let N = s.length;
    let sCount = 0;
    let index = 0;
    let next = 0;
    while (index < t.length) {
        if (s[next] === t[index]) {
            sCount++;
            next++;
        }
        index++;
    }
    // if count for every s index, then true
    if (sCount === N) {
        console.log('true');
        return true;
    }
    console.log('false');
    return false;
};

isSubsequence("abc","ahbgdc");
isSubsequence("axc","ahbgdc");
