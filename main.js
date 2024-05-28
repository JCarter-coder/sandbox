var equalSubstring = function(s, t, maxCost) {
    let N = s.length;

    let maxLength = 0;
    let start = 0;
    let currentCost = 0;
    
    for (let i = 0; i < N; i++) {
        currentCost += Math.abs(s.charCodeAt(i) - t.charCodeAt(i));

        while (currentCost > maxCost) {
            currentCost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
            start++;
        }
        
        maxLength = Math.max(maxLength, i - start + 1);
    }

    console.log(maxLength);
    return maxLength;
};

equalSubstring("abcd","bcdf",3);
equalSubstring("abcd","cdef",3);
equalSubstring("abcd","acde",0);
equalSubstring("pxezla","loewbi",25);
