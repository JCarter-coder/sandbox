var averageWaitingTime = function(customers) {
    let sum = 0;
    let nextAvailableTime = customers[0][0];
    for (let i = 0; i < customers.length; i++) {
        if (customers[i][0] > nextAvailableTime) {
            nextAvailableTime = customers[i][0] + customers[i][1];
        } else nextAvailableTime += customers[i][1];
        let waitTime = nextAvailableTime - customers[i][0];
        sum += waitTime;
    }
    console.log(sum / customers.length);
};

averageWaitingTime([[1,2],[2,5],[4,3]]);
averageWaitingTime([[5,2],[5,4],[10,3],[20,1]]);