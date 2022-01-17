const { User } = require("../DAOS");
const { verifyJwtAndLoadPayload } = require("../services/auth");
const badRequestError = require("../errors/badRequestError");
const notFoundError = require("../errors/notFoundError");

module.exports = async (req, res, next) => {
  // vamos a poner la logica para validar el jwt, cargar el usuario y pasarselo al controller

  const privateUrls = ["/profile", "/users"];

  if (privateUrls.some((privateUrl) => req.url.includes(privateUrl))) {
    try {
      // desde aca
      ("Bearer dhasuidysa78d6sad6as");
      const { authorization } = req.headers;

      // const [p1, token] = authorization.split(" ")

      if (!authorization) {
        throw badRequestError("jwt requerido");
      }

      // splitString: ["Bearer", "{{token}}"]
      const splitString = authorization.split(" ");
      const token = splitString[1];

      // verificamos el jwt y cargamos el payload
      let payload;

      try {
        payload = await verifyJwtAndLoadPayload(token);
      } catch (error) {
        throw badRequestError("token invalido");
      }

      // 1. chequear que el iat no haya expirado
      const nowInMiliseconds = (new Date().getTime() + 1) / 1000;

      if (nowInMiliseconds <= payload.iat) {
        // el token esta expirado y deberiamos devolver un error
        throw badRequestError("token expirado");
      }

      // 2. Cargar el usuario de la bd a partir del userId

      const user = await User.getUserById(payload.userId);

      if (!user) {
        throw notFoundError(`usuario ${payload.userId} no encontrado`);
      }

      // vamos a cargar dentro del request el user cargado
      req.user = user;

      next();
    } catch (error) {
      res.status(403).json({
        message: "error de sistema",
        detail: error.message,
      });
    }
  } else {
    next();
  }
};
