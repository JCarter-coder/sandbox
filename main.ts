function shortestCommonSupersequence(str1: string, str2: string): string {
    let str1Length: number = str1.length;
    let str2Length: number = str2.length;

    const dp: number[][] = Array.from(
        {length: str1Length + 1}, () => Array(str2Length + 1).fill(0)
    );

    for (let row = 0; row <= str1Length; row++) {
        dp[row][0] = row;
    }
    for (let col = 0; col <= str2Length; col++) {
        dp[0][col] = col;
    }

    for (let row = 1; row <= str1Length; row++) {
        for (let col = 1; col <= str2Length; col++) {
            if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
                dp[row][col] = dp[row - 1][col - 1] + 1;
            } else {
                dp[row][col] = Math.min(
                    dp[row - 1][col],
                    dp[row][col - 1]
                ) + 1;
            }
        }
    }

    const supersequenceQueue = new Array();
    let row = str1Length;
    let col = str2Length;

    while (row > 0 && col > 0) {
        if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
            supersequenceQueue.push(str1.charAt(row - 1));
            row--;
            col--;
        } else if (dp[row - 1][col] < dp[row][col - 1]) {
            supersequenceQueue.push(str1.charAt(row - 1));
            row--;
        } else {
            supersequenceQueue.push(str2.charAt(col - 1));
            col--;
        }
    }

    while (row > 0) {
        supersequenceQueue.push(str1.charAt(row - 1));
        row--;
    }
    while (col > 0) {
        supersequenceQueue.push(str2.charAt(col - 1));
        col--;
    }

    let result: string = "";
    while (supersequenceQueue.length > 0) {
        result += supersequenceQueue.pop();
    }

    console.log(result);
    return result;
};

shortestCommonSupersequence("abac","cab");
shortestCommonSupersequence("aaaaaaaa","aaaaaaaa");
