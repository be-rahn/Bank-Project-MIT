var express = require("express");
var app = express();
var cors = require("cors");

app.use(express.static("public"));
app.use(cors());
