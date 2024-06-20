var maxDistance = function(position, m) {
    let answer = 0;
    let N = position.length;
    position.sort((a,b) => a - b);

    let canPlaceBalls = function(x, position, m) {
        let prevBallPos = position[0];
        let ballsPlaced = 1;

        for (let i = 0; i < position.length && ballsPlaced < m; i++) {
            let currentPos = position[i];
            if (currentPos - prevBallPos >= x) {
                ballsPlaced++;
                prevBallPos = currentPos;
            }
        }
        return ballsPlaced === m;
    }

    // Initial search space
    let low = 1;
    let high = Math.ceil(position[N - 1] / (m - 1.0));
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (canPlaceBalls(mid, position, m)) {
            answer = mid;
            low = mid + 1;
        } else high = mid - 1;
    }

    console.log(answer);
};

maxDistance([1,2,3,4,7],3);
maxDistance([5,4,3,2,1,1000000000],2);
maxDistance([1,2,3,4,5,6,7,8,9,10],4);
