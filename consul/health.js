const consul = require("./consulInstance");
const errors = require("errors");

module.exports = {
    node,
    checks,
    service,
    state
};

async function node(req, res, next) {
  try {
    res.data = await consul.health.node('machine');
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function checks(req, res, next) {
  try {
    res.data = await consul.health.checks('consul-demo');
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function service(req, res, next) {
  try {
    res.data = await consul.health.service("consul-demo");
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function state(req, res, next) {
  try {
    //status
    res.data = await consul.health.state('passing');
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}
