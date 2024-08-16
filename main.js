var largestAltitude = function(gain) {
    const altitudes = new Array(gain + 1).fill(0);
    
    for (let i = 0; i < gain.length; i++) {
        altitudes[i + 1] = altitudes[i] + gain[i];
    }

    let highestAltitude = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < altitudes.length; i++) {
        highestAltitude = Math.max(
            highestAltitude,
            altitudes[i]
        );
    }
    console.log(highestAltitude);
};

largestAltitude([-5,1,5,0,-7]);
largestAltitude([-4,-3,-2,-1,4,3,2]);
