var isPowerOfTwo = function(n) {
    console.log(Math.log2(n));  
    if (Math.log2(n) % 1 === 0) {
        console.log('true');
    } else console.log('false');
};

isPowerOfTwo(1);
isPowerOfTwo(16);
isPowerOfTwo(3);