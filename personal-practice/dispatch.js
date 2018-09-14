
(function() {
    class Dispatch {
        constructor() {
            this.events = Object.create(null);
        }
        on(eventname, cb) {
            let cbList = this.events[eventname] || [];
            cbList.push(cb);
            this.events[eventname] = cbList;
        }
        emit(eventname, ...args) {
            let cbList = this.events[eventname] || [];
            if (cbList.length === 0) {
                let errMsg = eventname + ' is not a subscription,or its callback not exist';
                throw new Error(errMsg);
            } else {
                cbList.forEach(fn=>{
                    if ("function" === typeof fn) {
                        fn.apply(null, args);
                    } else {
                        let errMsg = 'this callback is not a function';
                        throw new Error(errMsg);
                    }
                }
                )
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

}())
