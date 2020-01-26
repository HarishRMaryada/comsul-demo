const consul = require("./consulInstance");
const errors = require("errors");

module.exports = {
  datacenters,
  connectNodes,
  nodeList,
  nodeServices,
  serviceList,
  serviceNodes
};

async function datacenters(req, res, next) {
  try {
    res.data = await consul.catalog.datacenters();
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function connectNodes(req, res, next) {
  try {
      //not working
    res.data = await consul.catalog.connect.nodes("somting");
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function nodeList(req, res, next) {
  try {
    res.data = await consul.catalog.node.list();
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function nodeServices(req, res, next) {
  try {
    res.data = await consul.catalog.node.services("machine");
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function serviceList(req, res, next) {
  try {
    res.data = await consul.catalog.service.list();
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}

async function serviceNodes(req, res, next) {
  try {
    res.data = await consul.catalog.service.nodes("consul-demo");
    next();
  } catch (ex) {
    errors.handleException(ex, next);
  }
}
