const Consul = require("consul");
module.exports= new Consul({
    host: "localhost",
    port: 8500,
    promisify: true
  });;
