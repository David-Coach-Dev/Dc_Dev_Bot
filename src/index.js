const express = require("express");
const http = require("http");
const { join } = require("path");
require("dotenv").config({ path: join(__dirname, "../config/.env") });
//initialize
const app = express();
const p = process.env.PORT || 3000;
//settings
app.set("port",  p);
//middleware
require("./src/Cargar/bot.js");

//routes

//static files
app.use(express.static("public"));
//starting server
server.listen(app.get("port"), () => {
  console.log("server on port ", p, " http://localhost:"+p);
});
