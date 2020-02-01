const consulController = require("../consul");

module.exports = function(app) {
  let router = require("express").Router();

  let routes = [
    {
      url: "/service/list",
      controller: consulController.service.list,
      type: "GET"
    },
    {
      url: "/service/register",
      controller: consulController.service.register,
      type: "POST"
    },
    {
      url: "/service/deregister",
      controller: consulController.service.deregister,
      type: "POST"
    },
    {
      url: "/service/maintenance",
      controller: consulController.service.maintenance,
      type: "PUT"
    },
    {
        url: "/catalog/datacenters",
        controller: consulController.catalog.datacenters,
        type: "GET"
      },
      {
        url: "/catalog/connectNodes",
        controller: consulController.catalog.connectNodes,
        type: "GET"
      },
      {
        url: "/catalog/nodeList",
        controller: consulController.catalog.nodeList,
        type: "GET"
      },
      {
        url: "/catalog/nodeServices",
        controller: consulController.catalog.nodeServices,
        type: "GET"
      },

      {
        url: "/catalog/serviceList",
        controller: consulController.catalog.serviceList,
        type: "GET"
      },
      {
        url: "/catalog/serviceNodes",
        controller: consulController.catalog.serviceNodes,
        type: "GET"
      }, 
      {
        url: "/health/node",
        controller: consulController.health.node,
        type: "GET"
      },
      {
        url: "/health/checks",
        controller: consulController.health.checks,
        type: "GET"
      },
      {
        url: "/health/service",
        controller: consulController.health.service,
        type: "GET"
      },
      {
        url: "/health/state",
        controller: consulController.health.state,
        type: "GET"
      },    
      {
        url: "/kv/get",
        controller: consulController.kv.get,
        type: "GET"
      },   
      {
        url: "/kv/keys",
        controller: consulController.kv.keys,
        type: "GET"
      },   
  ];

  for (let route of routes) {
    switch (route.type) {
      case "GET":
        router.get(route.url, route.controller);
        break;
      case "POST":
        router.post(route.url, route.controller);
        break;
      case "PUT":
        router.put(route.url, route.controller);
        break;
    }
  }

  app.use("/", router);

  app.use(function postHandler(req, res, next) {
    if (req.route && req.route.path) {
      res.json({
        success: true,
        data: res.data
      });
      res.end();
    } else {
      next();
    }
  });

  /*
   * handle 404
   */
  app.use(function notFoundHandler(req, res) {
    if (!req.route || !req.route.path) {
      console.log(req.params);
      res.status(404);
      console.log("%s %d %s", req.method, res.statusCode, req.url);
      return res.json({
        error: "Not found"
      });
    }
  });
  /*
   * error handlers
   */
  app.use(function errorHandler(err, req, res, next) {
    return res.json({
      success: false,
      error: err
    });
  });
};
