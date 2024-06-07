var romanToInt = function(s) {
    const numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let result = 0;
    let subtract = 0;

    for (let i = 0; i < s.length; i++) {
        // if value is less than next value
        if (numerals[s[i]] < numerals[s[i + 1]]) {
            // store this to subtract in the next iteration
            subtract = numerals[s[i]];
        } else {
            result += numerals[s[i]] - subtract;
            subtract = 0;
        }
    }

    console.log(result);
    return result;
};

romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");
