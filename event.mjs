import {EventEmitter} from "events"

const emitter = new EventEmitter()
emitter.addListener("hello", (param1, param2) => {
    console.info(param1, param2)
});
emitter.addListener("hello", (param1, param2) => {
    console.info(`Hello ${param1} ${param2}`)
});

emitter.emit("hello", "Angga", "Ari")