import * as fs from 'fs';
import { Writable } from 'stream';

const stream = fs.createWriteStream('./target.log');

stream.on('finish', () => {
    console.log('All the data is transmitted');
});

stream.write("Angga\n");
stream.write('Hello world!', () => {
    console.log('File created!');
});
stream.end(); // will trigger finished event

// move one file to another
const readable = fs.createReadStream('./report.json');
const writable = fs.createWriteStream('./target.log');

readable.on('data', chunk => {
    writable.write(chunk);
});

// another approach attach writable stream into readable stream
writable.on('finish', () => {
    console.log('The end!');
});
readable.pipe(writable); // replace pf readable.on('data', () => {})
// One note here is that if any error occurs during piping,
// the writable is not closed automatically, so it might be necessary to track it and close it manually.


const writable2 = new Writable();
writable2._write = function(chunk, encoding, next) {
    console.log(chunk.toString());
    next();
};
writable2.write('hi,');
writable2.write('Keenan!');

// The  process.stdout and  process.stderr are writable streams
const readableStdOut = fs.createReadStream('./application.log');
readableStdOut.pipe(process.stdout);