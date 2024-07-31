var minHeightShelves = function(books, shelfWidth) {
    let N = books.length;
    // dp[i] = min height of bookcase containing all books
    // up to and excluding book i
    const dp = new Array(N + 1);
    // base cases
    dp[0] = 0;
    dp[1] = books[0][1];

    for (let i = 2; i <= N; i++) {
        // new shelf built to hold current books
        let remainingShelfWidth = shelfWidth - books[i - 1][0];
        let maxHeight = books[i - 1][1];
        dp[i] = books[i - 1][1] + dp[i - 1];

        let j = i - 1;
        // calculate height when previous books
        // are added onto a new shelf
        while (j > 0 && remainingShelfWidth - books[j - 1][0] >= 0) {
            maxHeight = Math.max(maxHeight, books[j - 1][1]);
            remainingShelfWidth -= books[j - 1][0];
            dp[i] = Math.min(dp[i], maxHeight + dp[j - 1]);
            j--;
        }
    }
    console.log(dp[N]);
};

minHeightShelves([[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]],4);
minHeightShelves([[1,3],[2,4],[3,2]],6);
