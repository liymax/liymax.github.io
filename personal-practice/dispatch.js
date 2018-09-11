class Dispatch {
    constructor() {
        this.events = {}
    }
    on(eventname, cb) {
        this.events[eventname] = cb;
    }
    emit(eventname, ...args) {
        let fn = this.events[eventname];
        if ("function" === typeof fn) {
            fn.apply(null, args);
        } else {
            let errMsg = eventname + ' is not a subscription,or its callback is not a function';
            throw new Error(errMsg);
        }
    }
}
let dispatcher = new Dispatch();
dispatcher.on("hello", (name)=>{
    console.log("hello", name);
}
);
setTimeout(()=>{
    dispatcher.emit('hello', 'scott');
}
, 1000)
