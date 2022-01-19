const handlerUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
};
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handlerUserInput);
  return stdin;
};

module.exports = { setupInput };
