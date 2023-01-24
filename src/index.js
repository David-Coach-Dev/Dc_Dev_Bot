const express = require("express");
const path = require("path");
const http = require("http");
//initialize
const app = express();
const p = 3000;
const server = http.createServer(app);
//settings
app.set("port",  p);
//middleware
require("./Cargar/bot");

//routes

//static files
app.use(express.static("public"));
//starting server
server.listen(app.get("port"), () => {
  console.log("server on port ", p, " http://localhost:"+p);
});
