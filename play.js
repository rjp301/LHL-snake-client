const net = require('net');
const connect = require('./client');
const setupInput = require('./setupInput');

console.log('Connecting...');
const conn = connect();
const stdin = setupInput();

const handleUserInput = function (key) {
  console.log(key);
  if (key === '\u0003') { process.exit() };
};

conn.on("connect", () => {
  console.log("Connected to server");
  conn.write("Name: RJP");
})

conn.on("data", (data) => {
  console.log("Incoming from server: ",data);
})

stdin.on("data", handleUserInput)
