import https from "https";
import { createWriteStream } from 'fs';

const fileStream = createWriteStream('./application.log');
const req = https.request({
        host: 'jsonplaceholder.typicode.com',
        path: '/todos/1',
        method: 'GET',
    },
    response => {
        response.pipe(fileStream); // write to file
        console.log(response.statusCode); // 200

        const chunks = [];
        response.on('data', (chunk) => {
            chunks.push(chunk);
        });
        response.on('end', () => {
            const result = Buffer.concat(chunks).toString();
            console.log(JSON.parse(result));
        });
    }
);
req.end();

const url = "https://hookb.in/1g2LdndRxRFd6NOOxk7w";
const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, function(response) {
    response.addListener("data", (data) => {
        console.info(`Receive ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Angga",
    lastName: "Ari Wijaya"
});
request.write(body);
request.end();