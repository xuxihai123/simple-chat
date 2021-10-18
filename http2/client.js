const http2 = require("http2");
// Creating and initializing client
const client = http2.connect("http://localhost:8000");
console.log("Client connected");

let req = client.request({
  ":method": "POST",
  ":path": "/",
  "Content-Type": "text/plain",
});

req.on("response", (responseHeaders, flags) => {
  console.log("status : " + responseHeaders[":status"]);
});

setInterval(() => {
  req.write(`client hello ping==>`);
}, 500);

req.on("data", (data) => {
  console.log(`${Date.now()} Received server data: ${data.toString()}`);
});

req.on("end", () => {
  client.close(() => {
    console.log("client closed");
  });
});

req.on("error", (error) => {
  console.log(error);
});
