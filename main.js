var combinationSum2 = function(candidates, target) {
    let list = [];
    candidates.sort((a,b) => a - b);
    
    let backtrack = (
        start, 
        target, 
        currentCombination
    ) => {
        if (target === 0) {
            list.push([...currentCombination])
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            if (candidates[i] > target) break;
            currentCombination.push(candidates[i]);
            backtrack(
                i + 1,
                target - candidates[i],
                currentCombination
            );
            currentCombination.pop();
        }
    }

    backtrack(0, target, []);
    console.log(list);
};

combinationSum2([10,1,2,7,6,1,5],8);
combinationSum2([2,5,2,1,2],5);
