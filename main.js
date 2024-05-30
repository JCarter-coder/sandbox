var kthLuckyNumber = function(k) {
    console.log((k + 1)
        .toString(2)
        .slice(1)
        .replaceAll(0, 4)
        .replaceAll(1, 7));
};

kthLuckyNumber(4);
kthLuckyNumber(10);
kthLuckyNumber(1000);
