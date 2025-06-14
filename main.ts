function minMaxDifference(num: number): number {
    let s = num.toString();
    let t = s;
    let pos = 0;
    while (pos < s.length && s[pos] === '9') {
        pos++;
    }
    if (pos < s.length) {
        s = s.replace(new RegExp(s[pos], 'g'), '9');
    }
    t = t.replace(new RegExp(t[0], 'g'), '0');
    console.log(parseInt(s) - parseInt(t))
    return parseInt(s) - parseInt(t);
};

minMaxDifference(11891); // Expected output: 99009
minMaxDifference(90);    // Expected output: 99
