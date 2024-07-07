var numWaterBottles = function(numBottles, numExchange) {
    // drink all the bottles
    let totalBottlesDrank = numBottles;
    let emptyBottles = numBottles;
    let fullBottles = 0;

    while (emptyBottles / numExchange >= 1) {
        // exchange empty bottles
        fullBottles = Math.floor(emptyBottles / numExchange);
        // recalculate empty bottles by removing exchanged ones
        emptyBottles -= (fullBottles * numExchange);
        // drink the full bottles
        totalBottlesDrank += fullBottles;
        emptyBottles += fullBottles
    }

    // return totalBottlesDrank
    console.log(totalBottlesDrank);
    return totalBottlesDrank;
};

numWaterBottles(9,3);
numWaterBottles(15,4);
