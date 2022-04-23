import timers from 'timers/promises';

console.log(new Date());

const name = await timers.setTimeout(1000, "Angga");

console.log(new Date());

for await (const startTime of timers.setInterval(1000, new Date())) {
    console.log(`Start timer at ${startTime}`);
    console.log(`Start timer at ${new Date()}`);
}