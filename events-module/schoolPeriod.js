const EventEmitter = require('events');

class School extends EventEmitter{
    schoolPeriod(){
        setTimeout(()=>{
            this.emit('bellRing',"12pm");
        },3000)
    }
};
const message = "hello world";
module.exports = {School,message}