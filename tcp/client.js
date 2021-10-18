const net = require("net");
// Creating and initializing client
const socket = net.connect({ host: "127.0.0.1", port: "4000" });
console.log("Client connected");

setInterval(() => {
  socket.write(`client hello ping==>`);
}, 500);

socket.on("data", (data) => {
  console.log(`${Date.now()} Received server data: ${data.toString()}`);
});

socket.on("end", () => {
  console.log("end");
});

socket.on("error", (error) => {
  console.log(error);
});
