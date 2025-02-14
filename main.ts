class ProductOfNumbers {
    numArray: number[];

    constructor() {
        this.numArray = new Array();
    }

    add(num: number): void {
        this.numArray.push(num);
    }

    getProduct(k: number): number {
        let product = 1;
        for (let i = this.numArray.length - k; i < this.numArray.length; i++) {
            product *= this.numArray[i];
        }
        return product;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */