const jwt = require("jsonwebtoken");
const secret = "ApiCurso";

const getJWT = (user) => {
  const userObject = {
    userId: user.id,
    email: user.email,
  };

  return jwt.sign(userObject, secret, {});
};

const verifyJwt = async (token) => {
  return jwt.verify(token, secret);
};

module.exports = { getJWT, verifyJwt };
