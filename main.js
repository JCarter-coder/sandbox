/**
 * @param {number[]} heroes
 * @param {number[]} monsters
 * @param {number[]} coins
 * @return {number[]}
 */
var maximumCoins = function(heroes, monsters, coins) {
    const ans = [];
    const monsterRewards = [];

    let findTotalCoins = (monsterRewards, heroPower, coinsSum) => {
        let l = 0;
        let r = monsterRewards.length - 1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (monsterRewards[mid][0] > heroPower) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        if (l === 0 && monsterRewards[l][0] > heroPower) {
            return 0;
        }
        return coinsSum[r];
    }

    for (let i = 0; i < monsters.length; i++) {
        monsterRewards.push([monsters[i], coins[i]]);
    }

    monsterRewards.sort((a,b) => a[0] - b[0]);
    
    let coinsSum = [];
    let prefixSum = 0;
    for (let i = 0; i < monsterRewards.length; i++) {
        prefixSum += monsterRewards[i][1];
        coinsSum[i] = prefixSum;
    }

    for (let i = 0; i < heroes.length; i++) {
        ans[i] = findTotalCoins(monsterRewards, heroes[i], coinsSum);
    }

    console.log(ans);
};

maximumCoins([1,4,2],[1,1,5,2,3],[2,3,4,5,6]);
maximumCoins([5],[2,3,1,2],[10,6,5,2]);
maximumCoins([4,4],[5,7,8],[1,1,1]);
