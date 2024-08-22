var findComplement = function(num) {
    let todo = num;
    let bit = 1;
    while (todo !== 0) {
        num = num ^ bit;
        bit = bit << 1;
        todo = todo >> 1;
    }
    console.log(num);
};

findComplement(5); // 2
findComplement(1); // 0
