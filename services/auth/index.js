const jwt = require("./jwt");
const user = require("./user");

module.exports = {
  getJwt: jwt.getJWT,
  verifyJwtAndLoadPayload: jwt.verifyJwtAndLoadPayload,
  createUser: user.createUser,
};
