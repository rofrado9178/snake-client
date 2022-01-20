const { UTF, UP, DOWN, LEFT, RIGHT, P, O } = require("./constant");
let connection;

const handlerUserInput = (key) => {
  const keys = { w: UP, a: LEFT, s: DOWN, d: RIGHT, p: P, o: O };
  if (key === "\u0003") {
    process.exit();
  }
  connection.write(keys[key]);
};
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(UTF);
  stdin.resume();
  stdin.on("data", handlerUserInput);

  return stdin;
};

module.exports = { setupInput };
