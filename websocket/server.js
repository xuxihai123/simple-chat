const WebSocket = require("ws");

const port = 5001;

const server = new WebSocket.Server({
  host: "127.0.0.1",
  port: port,
  path: "/wss",
  perMessageDeflate: false,
});

server.on("connection", function (connection) {
  connection.send("connection ok...");
  connection.on("message", (data) => {
    console.log(`${Date.now()} Received:${data}`);
    connection.send("server pong ===>");
  });

  connection.on("end", function () {
    console.log(`end event of client connection has been triggered`);
  });
  connection.on("close", function (hadError, reason) {
    console.log(reason);
  });
  connection.on("error", function (error) {
    console.log(`error event of client connection has been triggered`);
  });

  setInterval(() => {
    connection.send("push message to client===>");
  }, 5000);
});

console.log(`websocket proxy server listen ${port} port`);
