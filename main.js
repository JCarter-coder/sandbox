/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    s = s.split('');
    let whitePosition = 0;
    let totalSwaps = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            totalSwaps += i - whitePosition;
            whitePosition++;
        }
    }

    console.log(totalSwaps);
};

minimumSteps("101");
minimumSteps("100");
minimumSteps("0111");
