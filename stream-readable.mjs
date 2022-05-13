import { Readable } from 'stream';

const stream = new Readable();

stream.push('Hello');
stream.push('World!');
stream.push(null); // indicate end of stream

stream.on('data', (chunk) => { // flow mode
    console.log(chunk.toString());
});

// read function and the ‘readable’ event
const streamRead = new Readable();

const read = streamRead.read.bind(streamRead); // reference stream.read() and add more log before read()
streamRead.read = function() {
    console.log('read() called');
    return read();
}

streamRead.push('Hello');
streamRead.push('World!');
streamRead.push(null);

streamRead.on('data', (chunk) => {
    console.log(chunk);
});

// readable stream that is in a paused mode
streamRead.on('readable', () => {
    let data;
    while (null !== (data = streamRead.read())) {
        console.log('Received:', data.toString());
    }
});