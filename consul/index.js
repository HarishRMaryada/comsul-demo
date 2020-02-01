const service = require("./service");
const catalog = require("./catalog");
const health = require("./health");
const kv = require("./kv");

module.exports = {
  service,
  catalog,
  health,
  kv
};
