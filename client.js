const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding('utf-8');
  return conn;
}

module.exports = connect;