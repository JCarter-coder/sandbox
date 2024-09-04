/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let HASH_MULTIPLIER = 60013;

    let hashCoordinates = (x, y) => {
        return x + HASH_MULTIPLIER * y;
    }

    // Store obstacles in Set for efficient lookup
    const obstacleSet = new Set();
    for (let obstacle of obstacles) {
        obstacleSet.add(hashCoordinates(obstacle[0], obstacle[1]));
    }

    // Define direction vectors
    const DIRECTIONS = [[0, 1],[1, 0],[0, -1],[-1, 0]];

    let currentPosition = [0, 0];
    let maxDistanceSquared = 0;
    let currentDirection = 0; // 0 - 3, N/E/S/W

    for (let command of commands) {
        if (command === -1) {
            // Turn right
            currentDirection = (currentDirection + 1) % 4;
            continue;
        }
        if (command === -2) {
            // Turn left
            currentDirection = (currentDirection + 3) % 4;
            continue;
        }

        // Move forward
        let direction = DIRECTIONS[currentDirection];
        for (let step = 0; step < command; step++) {
            let nextX = currentPosition[0] + direction[0];
            let nextY = currentPosition[1] + direction[1];
            if (obstacleSet.has(hashCoordinates(nextX, nextY))) break;
            currentPosition[0] = nextX;
            currentPosition[1] = nextY;
        }

        maxDistanceSquared = Math.max(
            maxDistanceSquared,
            currentPosition[0]**2 + currentPosition[1]**2 
        );
    }

    console.log(maxDistanceSquared);
};

robotSim([4,-1,3],[]);
robotSim([4,-1,4,-2,4],[[2,4]]);
robotSim([6,-1,-1,6],[]);
