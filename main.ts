class NumberContainers {
    numberSystem: number[] = [];
    firstIndexOfNumberInContainer: Map<number, number[]> = new Map();

    constructor(numberSystem: number[]) {
        this.numberSystem = numberSystem ?? [];
    }

    change(index: number, number: number): void {
        const arrayStoreListIndexOfOldNumber = this.firstIndexOfNumberInContainer.get(this.numberSystem[index]) ?? [];
        if (arrayStoreListIndexOfOldNumber.length) {
            const idxRemove = arrayStoreListIndexOfOldNumber.indexOf(index);
            arrayStoreListIndexOfOldNumber.splice(idxRemove, 1);
            this.firstIndexOfNumberInContainer.set(this.numberSystem[index], arrayStoreListIndexOfOldNumber);
        }
        this.numberSystem[index] = number;
        if (!this.firstIndexOfNumberInContainer.get(number)?.length) {
            this.firstIndexOfNumberInContainer.set(number, []);
        }
        const arrayStoreListIndexOfNumber = this.firstIndexOfNumberInContainer.get(number);
        if (arrayStoreListIndexOfNumber !== undefined) {
            let idxPush = arrayStoreListIndexOfNumber.findIndex(element => element > index);
            if (idxPush === -1) {
                idxPush = arrayStoreListIndexOfNumber.length;
            }
            arrayStoreListIndexOfNumber.splice(idxPush, 0, index);
            this.firstIndexOfNumberInContainer.set(number, arrayStoreListIndexOfNumber);
        }
    }

    find(number: number): number {
        return this.firstIndexOfNumberInContainer.get(number)?.[0] || -1;
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

var obj = new NumberContainers([])
console.log(obj.find(10));
obj.change(2,10)
obj.change(1,10)
obj.change(3,10)
obj.change(5,10)
console.log(obj.find(10));
obj.change(1,20)
console.log(obj.find(10));
console.log(obj);

var obj2 = new NumberContainers([]);
console.log(obj2.find(10));
obj2.change(1000000000,10)
console.log(obj2.find(10));
