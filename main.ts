function minCapability(nums: number[], k: number): number {
    let minReward = 1;
    let maxReward = Math.max(...nums);
    let totalHouses = nums.length;

    while (minReward < maxReward) {
        let midReward = Math.floor((minReward + maxReward) / 2);
        let possibleThefts = 0;

        for (let i = 0; i < totalHouses; i++) {
            if (nums[i] <= midReward) {
                possibleThefts++;
                i++;
            }
        }

        if (possibleThefts >= k) maxReward = midReward;
        else minReward = midReward + 1;
    }

    console.log(minReward);
    return minReward;
};

minCapability([2,3,5,9],2);
minCapability([2,7,9,3,1],2);
