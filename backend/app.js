"use strict";

require("dotenv").config();

const http = require("http");
const host = '0.0.0.0';
const port = process.env.PORT || 3000; 

const cors = require("cors");
const morgan = require("morgan");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));

const server = http.createServer(app);

server.listen(port, host, () => {
  console.log("Server has started.");
});

const root = require("./routes/index");
const journal = require("./routes/journal");
const prompts = require("./routes/prompts");

app.use("/", root);
app.use("/journal", journal)
app.use("/prompts", prompts)