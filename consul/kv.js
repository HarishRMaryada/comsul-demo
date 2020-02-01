const consul = require("./consulInstance");
const errors = require("errors");

module.exports = {
  get,
  set,
  del,
  keys
};

async function get(req, res, next) {
  try {
    let value = await consul.kv.get("hello");
    res.data = JSON.parse(value.Value);
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function set(req, res, next) {
  try {
    res.data = await consul.kv.set(
      "hello",
      JSON.stringify({
        something: "data"
      }),
      function(err, result) {
        if (err) throw err;
      }
    );
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function del(req, res, next) {
  try {
    res.data = await consul.kv.del("hello", function(err, result) {
      if (err) throw err;
    });
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
