const express = require("express");

//Routes
const User = require("./user");

const router = express.Router();

User(router);

module.exports = router;
