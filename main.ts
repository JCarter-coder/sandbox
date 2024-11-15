class RandomizedSet {
    randomSet: Set<number>;
    constructor() {
        this.randomSet = new Set();
    }

    insert(val: number): boolean {
        if (!this.randomSet.has(val)) {
            this.randomSet.add(val);
            return true;
        } else return false;
    }

    remove(val: number): boolean {
        if (this.randomSet.has(val)) {
            this.randomSet.delete(val);
            return true;
        } else return false;
    }

    getRandom(): number {
        let randomIndex: number = (
            Math.floor(Math.random() * this.randomSet.size)
        )
        return [...this.randomSet][randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
var param_1 = obj.insert(1)
var param_2 = obj.remove(2)
var param_3 = obj.insert(2)
var param_4 = obj.getRandom()
var param_5 = obj.remove(1)
var param_6 = obj.insert(2)
var param_7 = obj.getRandom()

console.log(obj);