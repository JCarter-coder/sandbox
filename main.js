var longestPalindrome = function(s) {
    const seen = {};
    for (let i = 0; i < s.length; i++) {
        if (!seen[s[i]]) {
            seen[s[i]] = 1;
        } else seen[s[i]]++;
    }

    // total of each even value letter
    let totalEvenValue = 0;
    // greatest odd value of a letter in seen container
    let greatestOddValue = 0;
    
    for (const [key, val] of Object.entries(seen)) {
        // if even, add value to evenSeenLetters total
        if (val % 2 === 0) {
            totalEvenValue += val;
        } 
        // else if odd value, hold greatest odd value
        else if (val > greatestOddValue) {
            let temp = greatestOddValue - 1;
            greatestOddValue = val;
            // when greater odd value is found, add the
            // adjusted temp value to the totalEvenValue
            if (temp > 0) {
                totalEvenValue += temp;
            }
        }
        // else, adjust odd values by substracting one
        // to make it even to increase longest palindrome
        else {
            totalEvenValue += val - 1;
        }
    }

    console.log(totalEvenValue + greatestOddValue);
};

longestPalindrome("abccccdd");
longestPalindrome("a");