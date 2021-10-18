
const http2 = require('http2');
const fs = require('fs');


// Creating and initializing server
const server = http2.createServer();

server.on('error', (error) => {
    console.log('Error: ' + error);
});

server.on('stream', (stream, requestHeaders) => {
    stream.respond({
        ':status': 200,
        'content-type': 'text/plain'
    });

    setInterval(()=>{
        stream.write('====>push message to client');
    },5000);

    stream.on('data', (data) => {
        console.log(`${Date.now()} Received client data: ${data.toString()}`);
        stream.write('server pong ===>'); // echo received data back
    });

    stream.on('close', () => {
        console.log('stream closed');
    });

    stream.on('end', () => {
        console.log('stream end');
    });

});

server.listen(8000);