class Robot {
    constructor(name, position, health, direction) {
        this.name = name;
        this.position = position;
        this.health = health;
        this.direction = direction;
    }
}

var survivedRobotsHealths = function(positions, healths, directions) {
    let robotList = [];
    for (let i = 0; i < positions.length; i++) {
        robotList.push(new Robot(i+1, positions[i], healths[i], directions[i]));
    }

    // Sort the Robots in positional order
    let sortedRobots = robotList.sort((a,b) => a.position - b.position);
    let stack = [];

    for (let robot of sortedRobots) {
        if (robot.direction === "R" || stack.length === 0 ||
            stack[stack.length - 1].direction === "L") {
            stack.push(robot);
            continue;
        }
        if (robot.direction === "L") {
            let add = true;
            while (stack.length > 0 && 
                stack[stack.length - 1].direction === "R" && add) {
                let last_health = stack[stack.length - 1].health;
                if (robot.health > last_health) {
                    stack.pop();
                    robot.health -= 1;
                } else if (robot.health < last_health) {
                    stack[stack.length - 1].health -= 1;
                    add = false;
                } else {
                    stack.pop();
                    add = false;
                }
            }

            if (add) stack.push(robot);
        }
    }
    
    let result = [];

    // Resort the remaining robots to their original indexed order
    stack.sort((a,b) => a.name - b.name);
    for (let robot of stack) {
        result.push(robot.health);
    }
    console.log(result);
};

survivedRobotsHealths([5,4,3,2,1],[2,17,9,15,10],"RRRRR");
survivedRobotsHealths([3,5,2,6],[10,10,15,12],"RLRL");
survivedRobotsHealths([1,2,5,6],[10,10,11,11],"RLRL");
