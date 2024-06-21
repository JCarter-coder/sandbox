var maxSatisfied = function(customers, grumpy, minutes) {
    let N = customers.length;
    let unrealizedCustomers = 0;

    for (let i = 0; i < minutes; i++) {
        unrealizedCustomers += customers[i] * grumpy[i];
    }

    let maxUnrealizedCustomers = unrealizedCustomers;

    for (let i = minutes; i < N; i++) {
        unrealizedCustomers += customers[i] * grumpy[i];
        unrealizedCustomers -= customers[i - minutes] * grumpy[i - minutes];
        maxUnrealizedCustomers = Math.max(
            maxUnrealizedCustomers, unrealizedCustomers
        );
    }

    let totalCustomers = maxUnrealizedCustomers;

    for (let i = 0; i < N; i++) {
        totalCustomers += customers[i] * (1 - grumpy[i]);
    }

    
    console.log(totalCustomers);
};

maxSatisfied([1,0,1,2,1,1,7,5],[0,1,0,1,0,1,0,1],3);
maxSatisfied([1],[0],1);
maxSatisfied([3],[1],1);
maxSatisfied([5,8],[0,1],1);
maxSatisfied([4,10,10],[1,1,0],2);