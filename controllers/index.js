const consulController = require("../consul");

module.exports = function(app) {
  let router = require("express").Router();

  let routes = [
    {
      url: "/service/list",
      controller: consulController.service.list,
      type: "GET"
    },
    // {
    //   url: "/service/register",
    //   controller: consulController.service.register,
    //   type: "POST"
    // },
    // {
    //   url: "/service/deregister",
    //   controller: consulController.service.deregister,
    //   type: "POST"
    // },
    // {
    //   url: "/service/maintenance",
    //   controller: consulController.service.maintenance,
    //   type: "PUT"
    // }
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
