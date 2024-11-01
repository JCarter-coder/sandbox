/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    if (s.length < 3) {
        console.log(s);
        return s;
    }
    let stringArray = [];
    stringArray.push(s[0]);
    stringArray.push(s[1]);

    for (let i = 2; i < s.length; i++) {
        if (
            s[i] !== stringArray[stringArray.length - 1] ||
            s[i] !== stringArray[stringArray.length - 2]
        ) {
            stringArray.push(s[i]);
        }
    }
    
    console.log(stringArray.join(''));
};

makeFancyString("leeetcode");
makeFancyString("aaabaaaa");
makeFancyString("aab");
makeFancyString("aaa");
