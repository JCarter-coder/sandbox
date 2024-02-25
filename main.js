var canTraverseAllPairs = function(nums) {
    if (nums.length === 1) {
        // return edge case
        console.log('true');
    }
    if (nums.includes(1)) {
        // return edge case
        console.log(`false`)
    }
    const maxValue = new Array(Math.max(...nums));
    console.log(...maxValue);
    for (let i = 0; i < nums.length; i++) {
        
        
    }
};

canTraverseAllPairs([1]);
canTraverseAllPairs([1,2]);
canTraverseAllPairs([2,3,6]);
canTraverseAllPairs([3,9,5]);
canTraverseAllPairs([4,3,12,8]);

//findAllPeople(6, [[1,2,5],[2,3,8],[1,5,10]], 1);
//findAllPeople(4, [[3,1,3],[1,2,2],[0,3,3]], 3);
//findAllPeople(5, [[3,4,2],[1,2,1],[2,3,1]], 1);

