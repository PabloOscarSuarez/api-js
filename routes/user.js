const controllerAuth = require("../controllers/auth");

const user = (router) => {
  router.post("/signUp", controllerAuth.signUp);
};

module.exports = user;
