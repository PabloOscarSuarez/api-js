const jwt = require("./jwt");

module.exports = {
  getJwt: jwt.getJWT,
  verify: jwt.verifyJwt,
};
