/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let openBrackets = 0;
    let minAddsRequired = 0;

    for (let char of s.split('')) {
        if (char === '(') openBrackets++;
        else {
            if (openBrackets > 0) openBrackets--;
            else minAddsRequired++;
        }
    }

    console.log(minAddsRequired + openBrackets);
};

minAddToMakeValid("())");
minAddToMakeValid("(((");
