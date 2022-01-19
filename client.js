const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf-8');
  
  conn.on("connect", () => {
    console.log("Connected to server");
    conn.write("Name: RJP");
  });
  
  conn.on("data", (data) => {
    console.log("Incoming from server: ",data);
  });

  return conn;
};

module.exports = connect;