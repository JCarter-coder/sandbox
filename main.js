/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    const st = [];
    for (let currChar of expression.split('')) {
        if (currChar === ',' || currChar === '(') continue;

        if (
            currChar === 't' ||
            currChar === 'f' ||
            currChar === '!' ||
            currChar === '&' ||
            currChar === '|'
        ) st.push(currChar);

        else if (currChar === ')') {
            let hasTrue = false;
            let hasFalse = false;

            while (
                st[st.length - 1] !== '!' && st[st.length - 1] !== '&' && st[st.length - 1] !== '|'
            ) {
                let topValue = st.pop();
                if (topValue === 't') hasTrue = true;
                if (topValue === 'f') hasFalse = true;
            }

            let op = st.pop();
            if (op === '!') st.push(hasTrue ? 'f' : 't');
            else if (op === '&') st.push(hasFalse ? 'f' : 't');
            else st.push(hasTrue ? 't' : 'f');
        }
    }

    console.log(st[st.length - 1] === 't');
};

parseBoolExpr("&(|(f))");
parseBoolExpr("|(f,f,f,t)");
parseBoolExpr("!(&(f,t))");
