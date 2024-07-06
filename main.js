var passThePillow = function(n, time) {
    let completeTravel = Math.floor(time / (n - 1));
    let remainingMoves = Math.floor(time % (n - 1));

    if (completeTravel % 2 === 0) {
        console.log(remainingMoves + 1);
    } else {
        console.log(n - remainingMoves);
    }
};

passThePillow(4,5);
passThePillow(3,2);
passThePillow(18,38);