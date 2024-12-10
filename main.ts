function maximumLength(s: string): number {
    let longestSubstring = "";
    let currentSubstring = "";

    const doesAppearThrice = (
        fullString: string,
        substring: string
    ) => {
        const firstAppearance = fullString.indexOf(substring);
        const secondAppearance = fullString.indexOf(substring, firstAppearance + 1);
        const thirdAppearance = fullString.indexOf(substring, secondAppearance + 1);

        return firstAppearance >= 0 && 
            secondAppearance >= 0 &&
            thirdAppearance >= 0;
    }

    for (let i = 0; i < s.length; i++) {        
        if (i > 0 && s[i] !== s[i - 1]) {
            if (currentSubstring.length >= longestSubstring.length &&
                doesAppearThrice(s, currentSubstring)
            ) longestSubstring = currentSubstring;
            
            currentSubstring = "";
        }

        currentSubstring += s[i];

        if (currentSubstring.length >= longestSubstring.length &&
            doesAppearThrice(s, currentSubstring)
        ) longestSubstring = currentSubstring;
    }

    console.log(longestSubstring.length === 0 ? -1 : longestSubstring.length);
    return longestSubstring.length === 0 ? -1 : longestSubstring.length;
};

maximumLength("aaaa");
maximumLength("abcdef");
maximumLength("abcaba");
