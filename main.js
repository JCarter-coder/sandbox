var furthestBuilding = function(heights, bricks, ladders) {
    let lo = Number.POSITIVE_INFINITY;
    let hi = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < heights.length - 1; i++) {
        let climb = heights[i + 1] - heights[i];
        if (climb <= 0) {
            continue;
        }
        lo = Math.min(lo, climb);
        hi = Math.max(hi, climb);
    }
    if (lo === Number.POSITIVE_INFINITY) {
        //return
        console.log(heights.length - 1);
    }
    while (lo <= hi) {
        let mid = lo + (hi - lo) / 2;
        console.log(`Passed to function: [${heights}], ${bricks}, ${ladders}, ${mid}`);
        let result = solveWithGivenThreshold(heights, bricks, ladders, mid);
        let indexReached = result[0];
        let laddersRemaining = result[1];
        let bricksRemaining = result[2];
        if (indexReached === heights.length - 1) {
            //return
            console.log(heights.length - 1);
        }
        if (laddersRemaining > 0) {
            hi = mid - 1;
            continue;
        }

        let nextClimb = heights[indexReached + 1] - heights[indexReached];
        if (nextClimb > bricksRemaining && mid > bricksRemaining) {
            //return
            console.log(indexReached);
        } else {
            lo = mid + 1;
        }
    }
};

var solveWithGivenThreshold = function(heights, bricks, ladders, K) {
    let laddersUsedOnThreshold = 0;
    console.log(`Starting ladders: ${ladders}`);
    console.log(`Starting bricks: ${bricks}`);
    for (let i = 0; i < heights.length - 1; i++) {
        let climb = heights[i + 1] - heights[i];
        if (climb <= 0) {
            continue;
        }
        if (climb === K) {
            laddersUsedOnThreshold++;
            ladders--;
        } else if (climb > K) {
            ladders--;
        } else {
            bricks -= climb;
        }
        console.log(`ladders: ${ladders}`);
        console.log(`bricks: ${bricks}`);

        if (ladders < 0) {
            if (laddersUsedOnThreshold >= 1) {
                laddersUsedOnThreshold--;
                ladders++;
                bricks -= K;
            } else {
                console.log(`ladders < 0 condition: [${i},${ladders},${bricks}]`)
                return [i, ladders, bricks];
            }
        }
        if (bricks < 0) {
            console.log(`bricks < 0 condition: [${i},${ladders},${bricks}]`)
            return [i, ladders, bricks];
        }
        console.log(`last condition: [${i+1},${ladders},${bricks}]`)
        return [i+1, ladders, bricks];
    }
}

furthestBuilding([4,2,7,6,9,14,12],5,1);
//furthestBuilding([4,12,2,7,3,18,20,3,19],10,2);
//furthestBuilding([14,3,19,3],17,0);