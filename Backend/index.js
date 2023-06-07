const express = require("express");
const mongoose = require("./db.js");

const app = express();

const routes = require("./Track/routes");

app.use(express.json());

app.listen(3000, () => {
  console.log("Server Started at Port:3000");
});
