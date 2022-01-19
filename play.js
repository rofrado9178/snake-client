const { connect } = require("./client");

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handlerUserInput);
  return stdin;
};
const handlerUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
};

console.log("Connecting ...");
connect();
