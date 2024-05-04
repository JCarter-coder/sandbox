var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a - b);
    let leftPointer = 0;
    let rightPointer = people.length - 1;
    let trips = 0;

    while (leftPointer < rightPointer) {
        // if within limit, take both moving left pointer too
        // else take heavy one and move right pointer only
        if (people[leftPointer] + people[rightPointer] <= limit) {
            leftPointer++;
        } 
        trips++;
        rightPointer--;
    }
    // pick up the last person if the pointers are the same
    if (leftPointer === rightPointer) {
        trips++;
    }
    console.log(trips);
    return trips;
};

numRescueBoats([1,2],3);
numRescueBoats([3,2,2,1],3);
numRescueBoats([3,5,3,4],5);
