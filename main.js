"use strict";
function maxDistance(s, k) {
    let latitude = 0;
    let longitude = 0;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'N':
                latitude++;
                break;
            case 'S':
                latitude--;
                break;
            case 'E':
                longitude++;
                break;
            case 'W':
                longitude--;
                break;
        }
        result = Math.max(result, Math.min(Math.abs(latitude) + Math.abs(longitude) + k * 2, i + 1));
    }
    console.log(result);
    return result;
}
;
maxDistance("NWSE", 1);
maxDistance("NSWWEW", 3);
