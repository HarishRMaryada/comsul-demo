/**
 * Module dependencies.
 */
"use strict";
require("app-module-path").addPath(__dirname);
const express = require("express");
// const ConsulConfig = require("./consul");
// const consul = new ConsulConfig();
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/health", (req, res) => res.send("Ok!"));

// app.get("/user/info", async (req, res) => {
//   const user = await consul.getUserConfig();
//   res.send(` Hello, I am ${user.name} this year ${user.age} `);
// });

// app.get("/user", async (req, res) => {
//   try {
//     await consul.Setuserconfig("age ", 18); // change age to 18
//     res.send("OK!");
//   } catch (err) {
//     console.error(err);
//     res.send("ERROR!");
//   }
// });

require("controllers")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
