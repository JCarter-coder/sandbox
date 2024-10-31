/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
    robot.sort((a,b) => a - b);
    factory.sort((a,b) => a[0] - b[0]);

    let factoryPositions = [];
    for (let f of factory) {
        for (let i = 0; i < f[1]; i++) {
            factoryPositions.push(f[0]);
        }
    }

    let robotCount = robot.length;
    let factoryCount = factoryPositions.length;

    let dp = new Array(robotCount + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = (new Array(factoryCount + 1).fill(0));
    }

    for (let i = 0; i < robotCount; i++) {
        dp[i][factoryCount] = 1e12;
    }

    for (let i = robotCount - 1; i >= 0; i--) {
        for (let j = factoryCount - 1; j >= 0; j--) {
            let assign = Math.abs(
                robot[i] - factoryPositions[j]
            ) + dp[i + 1][j + 1];

            let skip = dp[i][j + 1];

            dp[i][j] = Math.min(assign, skip);
        }
    }

    console.log(dp[0][0]);
};

minimumTotalDistance([0,4,6],[[2,2],[6,2]]);
minimumTotalDistance([1,-1],[[-2,1],[2,1]]);
