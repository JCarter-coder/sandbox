/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
    slots1.sort((a,b) => a[0] - b[0]);
    slots2.sort((a,b) => a[0] - b[0]);
    
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < slots1.length && pointer2 < slots2.length) {
        let intersectLeft = Math.max(
            slots1[pointer1][0],
            slots2[pointer2][0]
        )
        let intersectRight = Math.min(
            slots1[pointer1][1],
            slots2[pointer2][1]
        )
        if (intersectRight - intersectLeft >= duration) {
            console.log([intersectLeft, intersectLeft + duration]);
            return [intersectLeft, intersectLeft + duration];
        }
        if (slots1[pointer1][1] < slots2[pointer2][1]) {
            pointer1++;
        } else pointer2++;
    }
    console.log([]);
    return [];
};

minAvailableDuration([[10,50],[60,120],[140,210]],[[0,15],[60,70]],8);
minAvailableDuration([[10,50],[60,120],[140,210]],[[0,15],[60,70]],12);
