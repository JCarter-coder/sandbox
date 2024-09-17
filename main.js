/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(' ');
    s2 = s2.split(' ');
    let index = 0;
    const result = {};
    
    // swap list designations if s2 is longer than s1
    if (s2.length > s1.length) {
        let temp = s2;
        s2 = s1;
        s1 = temp;
    }

    while (index < s1.length) {
        if (!result[s1[index]]) {
            result[s1[index]] = 1;
        } else result[s1[index]]++;
        // check if s2[index] is not undefined and proceed
        if (s2[index] && !result[s2[index]]) {
            result[s2[index]] = 1;
        } else if (s2[index]) result[s2[index]]++;
        index++;
    }

    console.log(Object.entries(result)
        .filter(([key, value]) => value === 1)
        .map(([key]) => key)
    );
};

uncommonFromSentences("this apple is sweet","this apple is sour");
uncommonFromSentences("apple apple","banana");
uncommonFromSentences("s z z z s","s z ejt");

