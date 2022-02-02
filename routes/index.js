const express = require("express");

//middlewares
const withAuth = require("../middlewares/authMiddlewareApp");

//Routes
const User = require("./user");
const Task = require("./task");
const Label = require("./label");

const router = express.Router();

router.use(withAuth);

User(router);

Task(router);
Label(router);


module.exports = router;
