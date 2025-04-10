function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
    const calculate = (
        x: string,
        s: string,
        limit: number
    ): number => {
        if (x.length < s.length) return 0;
        if (x.length === s.length) return x >= s ? 1 : 0;

        let suffix: string = x.substring(x.length - s.length);
        let count = 0;
        let preLen = x.length - s.length;

        for (let i = 0; i < preLen; i++) {
            let digit: number = +x.charAt(i);
            if (limit < digit) {
                count += Math.pow(limit + 1, preLen - i);
                return count;
            }
            count += digit * Math.pow(limit + 1, preLen - 1 - i);
        }
        if (suffix >= s) count++;
        return count;
    }

    const start_ = (start - 1).toString();
    const finish_ = finish.toString();
    
    let result = calculate(finish_, s, limit) - calculate(start_, s, limit);
    console.log(result);
    return result;
};

numberOfPowerfulInt(1,6000,4,"124");
numberOfPowerfulInt(15,215,6,"10");
numberOfPowerfulInt(1000,2000,4,"3000");
