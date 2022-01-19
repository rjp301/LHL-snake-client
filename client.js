const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding('utf-8');
  
  conn.on("connect", () => {
    console.log("Connected to server");
    conn.write("Name: RJP");
  })
  
  conn.on("data", (data) => {
    console.log("Incoming from server: ",data);
  })

  return conn;
}

module.exports = connect;