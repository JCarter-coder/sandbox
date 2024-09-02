var chalkReplacer = function(chalk, k) {
    let index = 0;
    let sumChalk = 0;
    for (let i = 0; i < chalk.length; i++) {
        sumChalk += chalk[i];
    }

    k = k % sumChalk;

    while (k > 0) {
        k -= chalk[index];
        if (k >= 0) index++;
        if (index > chalk.length - 1) {
            index = 0;
        }
    }

    console.log(index);
};

chalkReplacer([5,1,5],22);
chalkReplacer([3,4,1,2],25);
