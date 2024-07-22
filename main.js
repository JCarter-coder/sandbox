class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
}

var sortPeople = function(names, heights) {
    let people = new Array(names.length);
    for (let i = 0; i < names.length; i++) {
        people[i] = new Person(names[i], heights[i]);
    }
    people.sort((a, b) => b.height - a.height);
    let result = people.map((x) => x.name);
    console.log(result);
};

sortPeople(["Mary","John","Emma"],[180,165,170]);
sortPeople(["Alice","Bob","Bob"],[155,185,150]);
