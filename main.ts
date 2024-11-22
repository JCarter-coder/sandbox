function isPalindrome(s: string): boolean {
    s = s.toLowerCase();
    let str = ""
    for (let i = 0; i < s.length; i++) {
        if (
            s[i] !== ' ' && 
            ((s[i].charCodeAt(0) >= 97 && 
            s[i].charCodeAt(0) <= 122) || 
            (s[i].charCodeAt(0) >= 48 && 
            s[i].charCodeAt(0) <= 57))
        ) str += s[i];
    }
    
    for (let i = 0 ; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            console.log(str);
            console.log(false);
            return false;
        }
    }
    console.log(str);
    console.log(true);
    return true;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome(" ");
isPalindrome("0P");
