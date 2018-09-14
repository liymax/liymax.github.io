(function() {

    class Observable {
        constructor(obj) {
            this._events = Object.create(null);
            Object.keys(obj).forEach(key=>{
                Object.defineProperty(this, key, {
                    get() {
                        return obj[key];
                    },
                    set(val) {
                        this.emit('set-' + key, val, obj[key])
                        obj[key] = val;
                    }
                })
            }
            )
        }
        watch(obj) {
            Object.entries(obj).forEach(([k,v])=>{
                this.on('set-' + k, v);
            }
            )
        }
        on(eventname, cb) {
            this._events[eventname] = cb;
        }
        emit(eventname, ...args) {
            let fn = this._events[eventname];
            if ("function" === typeof fn) {
                fn.apply(null, args);
            } else {
                let warning = eventname + ' is not a subscription,or its callback is not a function';
                console.warn(warning);
            }
        }
    }

    let obj = new Observable({
        age: 10
    })
    obj.watch({
        age: (newVal,oldVal)=>{
            console.log(newVal, oldVal)
        }
    })
    obj.age = 50
    setTimeout(()=>{
        obj.age = 25
    }
    , 1000)
}())
