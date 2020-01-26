const Consul = require("consul");
//const consul = 
module.exports= new Consul({
    host: "localhost",
    port: 8500,
    promisify: true
  });;
