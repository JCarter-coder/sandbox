var largestAltitude = function(gain) {
    let currentAltitude = 0;
    let highestAltitude = currentAltitude;
    
    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        highestAltitude = Math.max(
            highestAltitude,
            currentAltitude
        );
    }
    console.log(highestAltitude);
};

largestAltitude([-5,1,5,0,-7]);
largestAltitude([-4,-3,-2,-1,4,3,2]);
