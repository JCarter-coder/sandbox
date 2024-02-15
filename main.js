var distanceTraveled = function(mainTank, additionalTank) {
  let maxDistance = 0;
  // iterate through each liter of fuel
  for (let i = 1; i <= mainTank; i++) {
    // every i-th liter from mainTank, add 10km
    maxDistance += 10;
    // transfer 1 liter to mainTank after 5 liters used
    if (i % 5 === 0 && additionalTank > 0) {
      additionalTank -= 1;
      mainTank += 1;
    }
  }
  console.log(maxDistance);
};

distanceTraveled(5, 10);
distanceTraveled(1, 2);
