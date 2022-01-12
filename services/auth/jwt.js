const jwt = require("jsonwebtoken");
const secret = "ApiCurso";

const getJWT = (user) => {
  console.log('user', user)
  const userObject = {
    userId: user.id,
    email: user.email,
  };

  return jwt.sign(userObject, secret, {
    expiresIn: 60 * 60 * 24,
  }); // devuelve un has en jwt
};

const verifyJwtAndLoadPayload = async (token) => {
  return jwt.verify(token, secret);
};

module.exports = { getJWT, verifyJwtAndLoadPayload };
