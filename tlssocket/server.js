const tls = require("tls");

const certOpt = require("./cert");
// Creating and initializing server
const server = tls.createServer(certOpt, (connection) => {
  connection.write("ok.");

  setInterval(() => {
    connection.write("====>push message to client");
  }, 5000);

  connection.on("data", (data) => {
    console.log(`${Date.now()} Received client data: ${data.toString()}`);
    connection.write("server pong ===>"); // echo received data back
  });

  connection.on("close", () => {
    console.log("connection closed");
  });

  connection.on("end", () => {
    console.log("connection end");
  });
});

server.listen(5000);

console.log("tls server listen 5000");
