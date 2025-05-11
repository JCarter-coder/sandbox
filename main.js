"use strict";
class Logger {
    constructor() {
        this.container = {};
    }
    shouldPrintMessage(timestamp, message) {
        if (!Object(this.container).hasOwnProperty(message)) {
            this.container[message] = timestamp;
            return true;
        }
        else {
            if (timestamp - this.container[message] >= 10) {
                this.container[message] = timestamp;
                return true;
            }
            else {
                return false;
            }
        }
    }
}
