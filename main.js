/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    let positionInSection = k & -k;
    let isInInvertedPart = (((k / positionInSection) >> 1) & 1) === 1;
    let originalBitIsOne = (k & 1) === 0;

    if (isInInvertedPart) console.log(originalBitIsOne ? '0' : '1');
    else console.log(originalBitIsOne ? '1' : '0');
};

findKthBit(3,1);
findKthBit(4,11);
