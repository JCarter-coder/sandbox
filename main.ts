function romanToInt(s: string): number {
    const numerals = new Map();

    numerals.set('I', 1);
    numerals.set('V', 5);
    numerals.set('X', 10);
    numerals.set('L', 50);
    numerals.set('C', 100);
    numerals.set('D', 500);
    numerals.set('M', 1000);
    numerals.set('IV', 4);
    numerals.set('IX', 9);
    numerals.set('XL', 40);
    numerals.set('XC', 90);
    numerals.set('CD', 400);
    numerals.set('CM', 900);
    
    let ans: number = 0;
    let i: number = 0;
    
    while (i < s.length) {
        if (i < s.length - 1) {
            let doubleSymbol = s.substring(i, i + 2);
            if (numerals.has(doubleSymbol)) {
                ans += numerals.get(doubleSymbol);
                i += 2;
                continue;
            }
        }
        let singleSymbol = s.substring(i, i + 1);
        ans += numerals.get(singleSymbol);
        i++;
    }
    
    console.log(ans);
    return ans;
};

romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");
romanToInt("MCDLXXVI");
