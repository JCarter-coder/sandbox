class Logger {
    container: Record<string, number>;

    constructor() {
        this.container = {};
    }

    shouldPrintMessage(timestamp: number, message: string): boolean {
        if (!Object(this.container).hasOwnProperty(message)) {
            this.container[message] = timestamp;
            return true;
        } else {
            if (timestamp - this.container[message] >= 10) {
                this.container[message] = timestamp;
                return true;
            } else {
                return false;
            }
        }
    }
}