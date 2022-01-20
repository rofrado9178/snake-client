const net = require("net");
const { PORT, IP, UTF, NAME } = require("./constant");
// const { stdin } = require("process");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding(UTF);

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(NAME);
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("close", () => {
    console.log("Game Ended!");
    process.exit();
  });

  return conn;
};

module.exports = { connect };
