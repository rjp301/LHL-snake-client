const net = require('net');

module.exports = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding('utf-8');
  return conn;
}