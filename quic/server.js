const { Server } = require('quic');

const server = new Server();
server
    .on('error', (err) => console.error(Object.assign(err, { class: 'server error' })))
    .on('session', (session) => {
        // console.info(session)

        session
            .on('error', (err) => console.error(Object.assign(err, { class: 'server session error' })))
            .on('stream', (stream) => {
                // console.info(stream)
                setInterval(() => {
                    stream.write(`server push message to client ==>`);
                }, 5000);

                stream
                    .on('error', (err) => console.error(Object.assign(err, { class: 'server stream error' })))
                    .on('data', (data) => {
                        console.info(`${Date.now()} server stream ${stream.id} data: ${data.toString()}`);
                        stream.write('server pong ===>');
                    })
                    .on('end', () => {
                        console.info(`server stream ${stream.id} ended`);
                        stream.end();
                    })
                    .on('finish', () => {
                        console.info(`server stream ${stream.id} finished`);
                    });
            });
    });

server
    .listen(2345)
    .then(() => {
        console.info(Object.assign({ class: 'server listen' }, server.address()));
    })
    .catch(console.error);
