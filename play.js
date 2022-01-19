const net = require('net');
const connect = require('./client')

console.log('Connecting...');
const conn = connect();

conn.on("connect", () => {
  console.log("Connected to server");
  conn.write("Name: RJP");
})

conn.on("data", (data) => {
  console.log("Incoming from server: ",data);
})