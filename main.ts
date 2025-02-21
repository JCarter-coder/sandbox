class MRUQueue {

    private queue: number[];

    constructor(n: number) {
        this.queue = new Array(n);
        for (let i = 0; i < n; ++i) {
            this.queue[i] = i + 1;
        }
    }

    fetch(k: number): number {
        const element = this.queue.splice(k - 1, 1)[0];
        this.queue.push(element);
        return element;
    }
}

/**
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */