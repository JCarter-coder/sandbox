var minSteps = function(n) {
    // operations 'copy' or 'paste'
    let operations = 0;
    let d = 2;
    
    while (n > 1) {
        while (n % d === 0) {
            operations += d;
            n /= d;
        }
        d++;
    }

    console.log(operations);
};

minSteps(3); // 3
minSteps(1); // 0
