var maximumNumberOfStringPairs = function(words) {
    let container = {};
    let pair = 0;
    for (let i = 0; i < words.length; i++) {
        if (Object.hasOwn(container, (words[i][1] + words[i][0]))) {
            pair += 1;
        } else if (!container[words[i]]) {
            container[words[i]] = 1;
        }
    }
    console.log(pair);
};

maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]);
maximumNumberOfStringPairs(["ab","ba","cc"]);
maximumNumberOfStringPairs(["aa","ab"]);

