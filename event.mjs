import {EventEmitter} from "events"

const emitter = new EventEmitter()
emitter.addListener("hello", (param1, param2) => {
    console.info(param1, param2)
});
emitter.on("hello", (param1, param2) => {
    console.info(`Hello ${param1} ${param2}`)
});

emitter.emit("hello", "Angga", "Ari");

emitter.removeListener("hello", (param1, param2) => {
    console.info(`Hello ${param1} ${param2}`)
});


// trigger listener only once when emitted
emitter.once("only-once", (param1, param2) => {
    console.info("Hello")
});

emitter.emit("only-once"); // hello
emitter.emit("only-once"); // nothing happen
emitter.emit("only-once"); // noting happen