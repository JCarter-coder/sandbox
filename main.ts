function clearDigits(s: string): string {
    const sArray= s.split("");
    
    for (let i = 0; i < sArray.length; i++) {
        if (Number.isInteger(+sArray[i])) {
            //console.log(sArray[i]);
            if (i > 0) {
                sArray.splice(i - 1, 2);
                i -= 2;
            } else {
                sArray.splice(i--, 1);
            }
        }
    }
    console.log(sArray.join(""));
    return sArray.join("");
};

clearDigits("abc");
clearDigits("cb34");
