class EventEmitter {
    constructor() {
        this.events = {};
    }
    subscribe(eventName, callback) {
        this.events[eventName] = this.events[eventName] ?? [];
        this.events[eventName].push(callback);
        
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(f => f !== callback);
                // to avoid memory leaks adding a cleanup condition
                if (this.events[eventName].length === 0) {
                    delete this.events[eventName];
                }
            }
        };
    }
    
    emit(eventName, args = []) {
        if (!(eventName in this.events)) return [];
        return this.events[eventName].map(f => f(...args));
    }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
//sub1.unsubscribe();
console.log(emitter.emit("firstEvent", [5]));
