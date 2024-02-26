var isSameTree = function(p, q) {
    if (JSON.stringify(p) === JSON.stringify(q)) {
        console.log('true');
    } else console.log('false');
};

isSameTree([1,2,3],[1,2,3]); //expect true
isSameTree([1,2],[1,null,2]); //expect false
isSameTree([1,2,1],[1,1,2]); //expect false

//findAllPeople(6, [[1,2,5],[2,3,8],[1,5,10]], 1);
//findAllPeople(4, [[3,1,3],[1,2,2],[0,3,3]], 3);
//findAllPeople(5, [[3,4,2],[1,2,1],[2,3,1]], 1);

