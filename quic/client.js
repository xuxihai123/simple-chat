const { Client } = require('quic');

const cli = new Client();
cli.on('error', (err) => console.error(Object.assign(err, { class: 'client error' })));

(async function () {
    await cli.connect(2345);

    const stream = cli.request();
    stream.write(`request ok...`);
    stream
        .on('error', (err) => console.error(Object.assign(err, { class: 'client stream error' })))
        .on('data', (data) => {
            console.log(`${Date.now()} receive ${data}`);
        })
        .on('end', () => {
            console.log(`client stream ${stream.id} ended`);
            cli.close();
        })
        .on('finish', () => {
            console.log(`client stream ${stream.id} finished`);
        });
    setInterval(() => {
        stream.write(`client ping ==>`);
    }, 500);
})();
