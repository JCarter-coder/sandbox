var nearestPalindromic = function(n) {
    let generatePalindromeFromLeft = (leftHalf, isEvenLength) => {
        let palindrome = leftHalf;
        if (!isEvenLength) leftHalf = leftHalf / 10n;
        while (leftHalf > 0n) {
            palindrome = palindrome * 10n + leftHalf % 10n;
            leftHalf = leftHalf / 10n;
        }
        return palindrome;
    }

    let num = BigInt(n);
    if (num <= 10n) return (num - 1n).toString();
    if (num === 11n) return "9";

    let len = n.length;
    let leftHalf = BigInt(n.slice(0, (len + 1) / 2));

    let palindromeCandidates = [
        generatePalindromeFromLeft(leftHalf - 1n, len % 2 === 0),
        generatePalindromeFromLeft(leftHalf, len % 2 === 0),
        generatePalindromeFromLeft(leftHalf + 1n, len % 2 === 0),
        BigInt(10n ** BigInt(len - 1)) - 1n,
        BigInt(10n ** BigInt(len)) + 1n
    ];

    let nearestPalindrome = 0n;
    let minDifference = BigInt(Number.MAX_SAFE_INTEGER);

    for (let candidate of palindromeCandidates) {
        if (candidate === num) continue;
        let difference = candidate > num ? candidate - num : num - candidate;
        if (difference < minDifference ||
            (difference === minDifference && candidate < nearestPalindrome)) {
            minDifference = difference;
            nearestPalindrome = candidate;
        }
    }
    return nearestPalindrome.toString();
};

nearestPalindromic("123");
nearestPalindromic("1");
