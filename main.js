var join = function(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const merged = {};
    
    combinedArray.forEach((obj) => {
        const id = obj.id;
        if (!merged[id]) {
            merged[id] = { ...obj };
        } else {
            merged[id] = { ...merged[id], ...obj };
        }
    });

    const joinedArray = Object.values(merged);
    joinedArray.sort((a,b) => a.id - b.id);

    console.log(joinedArray);
};

join([{"id": 1,"x": 1},{"id": 2,"x": 9}],[{"id": 3,"x": 5}]);
join([{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}],[{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]);
join([{"id":1,"b":{"b": 94},"v":[4,3],"y":48}],[{"id":1,"b":{"c": 84},"v":[1,3]}]);
