var chalkReplacer = function(chalk, k) {
    let sumChalk = 0;
    for (let i = 0; i < chalk.length; i++) {
        sumChalk += chalk[i];
        if (sumChalk > k) {
            break;
        }
    }

    k = k % sumChalk;

    for (let i = 0; i < chalk.length; i++) {
        if (k < chalk[i]) {
            console.log(i);
            return i;
        }
        k -= chalk[i];
        
    }

    console.log(0);
};

chalkReplacer([5,1,5],22);
chalkReplacer([3,4,1,2],25);
