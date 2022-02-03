const eventEmitter = require('events');

const customEvent = new eventEmitter;

customEvent.on("request", (name, id) => {
    console.log(`${name} has ad id of ${id}`);
});

customEvent.on('food', (name, _, __, food) => {
    console.log(`${name}s favorite food is ${food}`);
})

customEvent.emit('food', 'jimmy', 1234, true, 'donuts');


