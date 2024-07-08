var findTheWinner = function(n, k) {
    let winnerHelper = function(n, k) {
        if (n == 0) return 0;
        return (winnerHelper(n - 1, k) + k) % n;
    }
    console.log(winnerHelper(n, k) + 1);
    return winnerHelper(n, k) + 1;
};

findTheWinner(5,2);
findTheWinner(6,5);