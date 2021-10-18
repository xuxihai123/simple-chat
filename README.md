# simpel chat example

> implement chat with network protocol, Help understand how common protocols work

- tcp
- tls
- websocket
- http2
- quic
- mkcp

### 生成 localhost 自签名证书

```sh
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' -keyout key.pem -out cert.pem
```
