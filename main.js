var maximumGain = function(s, x, y) {
    let aCount = 0;
    let bCount = 0;
    let totalPoints = 0;

    // Ensure "ab" always has higher points than "ba"
    if (x < y) {
        // Swap points
        let temp = x;
        x = y;
        y = temp;
        // Reverse the string to maintain logic
        let arr = s.split('');
        for (let i = 0; i < (arr.length / 2); i++) {
            temp = arr[i]
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
        s = arr.join('');
    }

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];

        if (currentChar === 'a') {
            aCount++;
        } else if (currentChar === 'b') {
            if (aCount > 0) {
                // Can form "ab", remove it and add points
                aCount--;
                totalPoints += x;
            } else {
                // Can't form "ab", keep 'b' for potential future "ba"
                bCount++;
            }
        } else {
            // Non 'a' or 'b' character encountered
            // Calculate points for any remaining "ba" pairs
            totalPoints += Math.min(bCount, aCount) * y;
            // Reset counters for next segment
            aCount = 0;
            bCount = 0;
        }
    }
    // Caculate points for any remaining "ba" pairs at the end
    totalPoints += Math.min(bCount, aCount) * y;
    
    console.log(totalPoints);
};

maximumGain("cdbcbbaaabab",4,5);
maximumGain("aabbaaxybbaabb",5,4);
