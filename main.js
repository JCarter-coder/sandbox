var findMaxK = function(nums) {
    let neg = new Set();

    for (let num of nums) {
        if (num < 0) {
            neg.add(num);
        }
    }

    let answer = -1;

    for (let num of nums) {
        if (num > answer && neg.has(-num)) {
            answer = num;
        }
    }
    
    console.log(answer);
    return answer;
};

findMaxK([-1,2,-3,3]);
findMaxK([-1,10,6,7,-7,1]);
findMaxK([-10,8,6,7,-2,-3]);
