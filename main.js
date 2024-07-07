var numWaterBottles = function(numBottles, numExchange) {
    // drink all the bottles
    let totalBottlesDrank = numBottles;

    while (numBottles >= numExchange) {
        // exchange empty bottles
        let fullBottles = Math.floor(numBottles / numExchange);
        // recalculate bottles by removing exchanged ones
        numBottles -= (fullBottles * numExchange);
        // drink the full bottles
        totalBottlesDrank += fullBottles;
        numBottles += fullBottles
    }

    // return totalBottlesDrank
    console.log(totalBottlesDrank);
    return totalBottlesDrank;
};

numWaterBottles(9,3);
numWaterBottles(15,4);
