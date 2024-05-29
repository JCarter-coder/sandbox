var numSteps = function(s) {
    let N = s.length;
    let operations = 0;
    let carry = 0;

    for (let i = N - 1; i > 0; i--) {
        //let digit = parseInt(s[i]) + carry;
        if ((s[i] - '0' + carry) % 2 === 1) {
            operations += 2;
            carry = 1;
        } else operations++;
    }
    
    console.log(operations + carry);
};

numSteps("1101");
numSteps("10");
numSteps("1");
numSteps("1111011110000011100000110001011011110010111001010111110001");
