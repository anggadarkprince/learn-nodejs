import net from 'net';

const server = net.createServer(function (client) {
    console.log("Client connected");
    client.on("data", function (data) {
        console.log(`Receive data from client : ${data.toString()}`);
        client.write(`Re: ${data}\r\n`);
    });
});

server.listen(3000, 'localhost');