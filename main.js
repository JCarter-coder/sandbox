/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    let res = 1;
    let strings = new Set();
    
    let search = (s) => {
        if (!strings.has(s)) {
            strings.add(s);
            res = Math.max(res, strings.size);
            strings.delete(s);
        }

        for (let i = 1; i < s.length; i++) {
            const sub = s.substring(0, i);
            if (strings.has(sub)) continue;
            strings.add(sub);
            search(s.substring(i));
            strings.delete(sub);
        }
    }

    search(s);
    console.log(res);
};

maxUniqueSplit("ababccc");
maxUniqueSplit("aba");
maxUniqueSplit("aa");
