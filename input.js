const { connect } = require("./client");
let connection;

const handlerUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
};
const setupInput = (conn) => {
  // connect();
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // connect.conn.on("connect", () => {
  stdin.on("data", handlerUserInput);
  // });
  return stdin;
};

module.exports = { setupInput };
