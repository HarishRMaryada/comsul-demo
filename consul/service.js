const consul = require("./consulInstance");
const errors = require("errors");


module.exports = {
  list,
  register,
  deregister,
  maintenance
};

async function list(req, res, next) {
  try {
    res.data = await consul.agent.service.list();
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function register(req, res, next) {
  try {
    res.data = await consul.agent.service.register("example");
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function deregister(req, res, next) {
  try {
    res.data = await consul.agent.service.deregister("example");
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function maintenance(req, res, next) {
  try {
    res.data = await consul.agent.service.maintenance({
      id: "example",
      enable: true
    });
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}
