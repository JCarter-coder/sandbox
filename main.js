var getLucky = function(s, k) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let charValue = (s.charCodeAt(i) - 96).toString();
        result += charValue;
    }

    while (k > 0) {
        let tempResult = 0;
        result = result.toString();
        for (let i = 0; i < result.length; i++) {
            let charValue = result.charCodeAt(i) - 48;
            tempResult += charValue;
        }
        result = tempResult;
        k--;
    }
    
    console.log(result);
};

getLucky("iiii",1);
getLucky("leetcode",2);
getLucky("zbax",2);
getLucky("hvmhoasabaymnmsd",1);
