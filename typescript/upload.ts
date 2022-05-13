const FormData = require('form-data');
import { request } from 'http';
import { createReadStream, createWriteStream } from 'fs';

const readStream = createReadStream('./file.txt');
const writeStream = createWriteStream('./file.txt');

const form = new FormData();
form.append('photo', readStream);
form.append('firstName', 'Angga');
form.append('lastName', 'Ari');
console.log(form.getHeaders());
form.pipe(writeStream);

const req = request(
    {
        host: 'jsonplaceholder.typicode.com',
        path: '/upload',
        method: 'POST',
        headers: form.getHeaders(),
    },
    response => {
        console.log(response.statusCode); // 200
    }
);

form.pipe(req);