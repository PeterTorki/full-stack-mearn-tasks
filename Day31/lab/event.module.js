const EventEmitter = require("events");
const myEvent = new EventEmitter();

myEvent.on("xyz", () => console.log("Event 1 is here"));
myEvent.once("xyz", () => console.log("Event 2 is here"));

myEvent.emit("xyz");
myEvent.emit("xyz");
