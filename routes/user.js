const controllerAuth = require("../controllers/auth");
// const authMiddleware = require("../middlewares/authMiddleware");

const user = (router) => {
  router.post("/signUp", controllerAuth.signUp);
  router.post("/login", controllerAuth.login);
  router.get("/profile", controllerAuth.profile);
  router.get("/ ", controllerAuth.findAllUsers);
};

module.exports = user;
