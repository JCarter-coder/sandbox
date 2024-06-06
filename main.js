var isNStraightHand = function(hand, groupSize) {
    // determine if groups can be made
    if (hand.length % groupSize !== 0) {
        console.log('false');
        return false
    }

    function findSuccessors(hand, groupSize, i) {
        let next = hand[i] + 1;
        // mark card as used
        hand[i] = -1;
        let count = 1;
        i += 1;
        while ( i < hand.length && count < groupSize) {
            if (hand[i] === next) {
                next = hand[i] + 1;
                hand[i] = -1;
                count++;
            }
            i++;
        }
        return count === groupSize;
    }

    // determine if groups of straights can be made
    hand.sort((a,b) => a - b);
    for (let i = 0; i < hand.length; i++) {
        if (hand[i] >= 0) {
            if (!findSuccessors(hand, groupSize, i)) {
                console.log('false');
                return false;
            }
        }
    }
    console.log('true');
    return true;
};

isNStraightHand([1,2,3,6,2,3,4,7,8],3);
isNStraightHand([1,2,3,4,5],4);
isNStraightHand([8,10,12],3);
