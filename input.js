let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
    console.log('Move: up');
  }
  
  if (key === 'a') {
    connection.write('Move: left');
    console.log('Move: left');
  }
  
  if (key === 's') {
    connection.write('Move: down');
    console.log('Move: down');
  }
  
  if (key === 'd') {
    connection.write('Move: right');
    console.log('Move: right');
  }
  
  if (key === 'm') {
    connection.write('Say: ssssss');
  }

};

module.exports = setupInput;