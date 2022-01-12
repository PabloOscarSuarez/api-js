const express = require("express");

//Routes
const User = require("./user");
const Task = require("./task");

const router = express.Router();

User(router);
Task(router);

module.exports = router;
