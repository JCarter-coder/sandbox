/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const result = [];
    let currentNumber = 1;
    
    for (let i = 0; i < n; i++) {
        result.push(currentNumber);

        // if multiplying the current number
        // by 10 is within the limit, do it
        if (currentNumber * 10 <= n) currentNumber *= 10;
        else {
            // adjust the current number by moving up one digit
            while (currentNumber % 10 === 9 || currentNumber >= n) {
                // remove the last digit
                currentNumber = Math.floor(currentNumber / 10);
            }
            currentNumber++;
        }
    }
    console.log(result);
};

lexicalOrder(13);
lexicalOrder(2);
