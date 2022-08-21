const express = require("express");
const app = express();

app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

module.exports = express;
module.exports = app;
