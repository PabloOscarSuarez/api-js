const express = require("express");

//middlewares
const withAuth = require("../middlewares/authMiddlewareApp");

//Routes
const User = require("./user");
const Task = require("./task");

const router = express.Router();

router.use(withAuth);
User(router);
Task(router);

module.exports = router;
