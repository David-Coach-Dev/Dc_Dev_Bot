const express = require("express");
const http = require("http");
const { join } = require("path");
require("dotenv").config({ path: join(__dirname, "../config/.env") });
//initialize
const app = express();
const p = process.env.PORT || 3000;
const server = http.createServer(app);
//settings
server.set("port",  p);
//middleware
require("./Cargar/bot");

//routes

//static files
server.use(express.static("public"));
//starting server
server.listen(app.get("port"), () => {
  console.log("server on port ", p, " http://localhost:"+p);
});
