const tls = require("tls");
const certOpt = require("./cert");
// Creating and initializing client
const tlssocket = tls.connect(5000, "127.0.0.1", certOpt);
console.log("Client connected");

setInterval(() => {
  tlssocket.write(`client hello ping==>`);
}, 500);

tlssocket.on("data", (data) => {
  console.log(`${Date.now()} Received server data: ${data.toString()}`);
});

tlssocket.on("end", () => {
  console.log("end");
});

tlssocket.on("error", (error) => {
  console.log(error);
});
