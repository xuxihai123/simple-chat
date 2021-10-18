const fs = require("fs");
const path = require("path");

module.exports = {
  key: fs.readFileSync(path.resolve(__dirname, "certs/key.pem")),
  cert: fs.readFileSync(path.resolve(__dirname, "certs/cert.pem")),
  rejectUnauthorized: false,
};
