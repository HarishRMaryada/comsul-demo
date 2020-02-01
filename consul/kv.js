const consul = require("./consulInstance");
const errors = require("errors");

module.exports = {
    get,
    keys
};

async function get(req, res, next) {
  try {
     let value = await consul.kv.get("consul-keys");
     res.data = JSON.parse(value.Value)
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function keys(req, res, next) {
    try {
      res.data = await consul.kv.keys("consul-keys");
      next();
    } catch (ex) {
      errors.handleException(ex, next);
    }
  }