const Consul = require("consul");
const consul = new Consul({
  host: "localhost",
  port: 8500,
  promisify: true
});
module.exports={consul};
