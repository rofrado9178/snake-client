const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: RFD");
  });

  conn.on("data", (data) => {
    console.log("Name: Fransiskus Aldo", data);
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };
