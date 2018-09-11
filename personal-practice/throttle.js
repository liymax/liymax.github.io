class Throttle{
  constructor(wait){
      this.previous = Date.now();
      this.wait = wait;
  }

  call(fn,...args){
      let now = Date.now();
      let remaining = this.wait - (now - this.previous);
      if(remaining<=0 || remaining > this.wait){
          fn.apply(this,args);
          this.previous = now;
      }
  }
}

let throttle = new Throttle(50);
for(let i =0;i<1000000;i++){
  throttle.call((index)=>{
      console.log("index:",index);
  },i);
}
