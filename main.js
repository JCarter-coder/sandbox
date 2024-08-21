var strangePrinter = function(s) {
    let removeDuplicates = (s) => {
        let uniqueChars = [];
        let i = 0;
        while (i < s.length) {
            let currentChar = s.charAt(i);
            uniqueChars.push(currentChar);
            while (i < s.length && s.charAt(i) === currentChar) {
                i++;
            }
        }
        return uniqueChars.join('');
    }

    // Remove consecutive duplicate letters
    s = removeDuplicates(s);

    let N = s.length;

    // dp[i][j] represents the minimum number
    // of turns to print s[i] to s[j]
    let minTurns = [];
    for (let i = 0; i < N; i++) {
        minTurns.push(new Array(N).fill(0));
        minTurns[i][i] = 1;
    }

    // Fill the dp table
    for (let len = 2; len <= N; len++) {
        for (let start = 0; start + len - 1 < N; start++) {
            let end = start + len - 1;

            // Initialize with worst case: print each character separately
            minTurns[start][end] = len;

            // Try all possible splits and find the minimum
            for (let split = 0; split < len - 1; split++) {
                let totalTurns = minTurns[start][start + split] +
                    minTurns[start + split + 1][end];
                
                if (s.charAt(start + split) === s.charAt(end)) {
                    totalTurns--;
                }

                minTurns[start][end] = Math.min(
                    minTurns[start][end],
                    totalTurns
                );
            }
        }
    }

    // Return the minimum turns needed to print the entire string

    console.log(minTurns[0][[N - 1]]);
};

strangePrinter("aaabbb");
strangePrinter("aba");
