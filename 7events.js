const events = require("events");
const eventEmitter = new events.EventEmitter();

const ringBell = () => {
  console.log("Ring ring ring");
  eventEmitter.emit("bellring", "Welcome");
};

eventEmitter.on("doorOpen", ringBell);
eventEmitter.on('bellring', function(message) {
    console.log(message);
});
eventEmitter.emit("doorOpen");
//First emit will run then on will run

