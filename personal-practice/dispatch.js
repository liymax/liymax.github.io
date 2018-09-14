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
        off(eventname, cb) {
            let cbList = this.events[eventname] || [];
            this.events[eventname] = [];
            if (cb) {
                this.events[eventname] = cbList.filter(e=>e !== cb)
            }
        }
        emit(eventname, ...args) {
            let cbList = this.events[eventname] || [];
            if (cbList.length === 0) {
                let warning = eventname + ' is not a subscription,or its callback not exist';
                console.warn(warning);
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

    function hi(name){
        console.log("hi", name);
    }
    dispatcher.on("hello",hi );
    dispatcher.off('hello', hi);
    setTimeout(()=>{
        dispatcher.emit('hello', 'scott');
    }
    , 1000)

}())
