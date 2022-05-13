import { StringDecoder } from 'string_decoder';
import * as fs from 'fs';
import * as util from 'util'

// The buffer is an array of bytes, where an element has a value from 0 to 255.
// Since every type of data, such as images and text has to be represented as numbers,
// we also explain the idea of character encodings.
const bufferString = Buffer.from('Angga');
console.log(bufferString);
console.log(bufferString.toString());

bufferString.reverse();
console.log(bufferString.toString());


// buffer is array of number (bytes: 0 - 255)
const buffer = new Buffer.alloc(5);

buffer[0] = 255;
console.log(buffer[0]); // 255

buffer[1] = 256;
console.log(buffer[1]); // 0

buffer[2] = 260;
console.log(buffer[2]); // 4
console.log(buffer[2] === 260%256); // true

buffer[3] = 516;
console.log(buffer[3]); // 4
console.log(buffer[3] === 516%256); // true

buffer[4] = -50;
console.log(buffer[4]); // 206

// Creates a Buffer of length 5, filled with 1
const bufferFilled1 = Buffer.alloc(5, 1);
console.log(bufferFilled1);

// Creates a Buffer containing 1, 2, 3
const bufferArray = Buffer.from([1, 2, 3]);
console.log(bufferArray);

// buffer with emoji
const buffers = [
    Buffer.from('Hello '),
    Buffer.from([0b11110000, 0b10011111]),
    Buffer.from([0b10001100, 0b10001110]),
    Buffer.from(' world!'),
];
let result = '';
buffers.forEach((buffer) => {
    result += buffer.toString();
});

console.log(result); // Hello ��� world! we cannot correctly decode because every buffer is treated separately

const decoder = new StringDecoder('utf8');

const results = buffers.reduce((result, buffer) => (
    `${result}${decoder.write(buffer)}`
), '');

console.log(results); // Hello 🌎 world!

// read file return buffer, this method is inefficient because file is loaded into memory until complete before .then()
// see stream.mjs to read data in stream (without waiting all data to be loaded first)
const readFile = util.promisify(fs.readFile);
readFile('./target.log'/*, { encoding: 'utf8' }*/) // without encoding will return buffer
    .then((content) => {
        console.log(content instanceof Buffer); // true
        console.log(content);
    })
    .catch(error => console.log(error));