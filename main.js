/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    let result = 0;
    skill.sort((a,b) => a - b);
    let teamSum = skill[0] + skill[skill.length - 1];
    for (let i = 0; i < skill.length/2; i++) {
        let team = [
            skill[i],
            skill[skill.length - 1 - i]
        ]
        if (team[0] + team[1] !== teamSum) {
            console.log(-1);
            return -1;
        }
        result += team[0] * team[1];
    }
    console.log(result);
};

dividePlayers([3,2,5,1,3,4]);
dividePlayers([3,4]);
dividePlayers([1,1,2,3]);
