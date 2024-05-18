var distributeCoins = function(root) {
    let moves = 0;
    
    let dfs = function(current) {
        if (current === null) {
            return 0;
        }

        // calculate the coins each subtree has
        // available to exchange
        let leftCoins = dfs(current.left);
        let rightCoins = dfs(current.right);

        // add the total number of exchange to moves
        moves += Math.abs(leftCoins) + Math.abs(rightCoins);

        // the number of coins current has
        // available to exchange
        return (current.val - 1) + leftCoins + rightCoins;
    }

    dfs(root);
    return moves;
};

distributeCoins([3,0,0]);
distributeCoins([0,3,0]);
