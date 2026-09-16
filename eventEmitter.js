const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to ABES Engineering College`);
});
myEmitter.on('exit',()=>{
    console.log("Application Closed.");
});
myEmitter.emit('greet','2nd Year');
myEmitter.emit('exit');
    