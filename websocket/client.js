const WebSocket = require("ws");

const websocketUrl = "ws://127.0.0.1:5001/wss";
wss = new WebSocket(websocketUrl, { perMessageDeflate: false });

wss.on("open", function () {
  console.log("open websocket url:" + websocketUrl);
  console.log("connect success.");
});
wss.on("message", function (data) {
  console.log(`${Date.now()} received: ${data}`);
});

wss.on("close", function (event) {
  console.log(`close event of server connection has been triggered`);
});
wss.on("error", function (err) {
  console.log(err);
});

setInterval(() => {
  wss.send("client ping ===>");
}, 500);
