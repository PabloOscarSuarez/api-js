const { User } = require("../../db/models");

module.exports = async (req, res) => {
  // "login/:id" => login/1 =>req.params.id

  try {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name || !last_name || !email || !password) {
      throw { code: 403, message: "campos requeridos" };
    }

    const nuevoUsuario = await createUser({
      first_name,
      last_name,
      email,
      password,
    });

    res.send({
      status: 200,
      nuevoUsuario,
    });
  } catch (err) {
    return res.status(err.code || 500).send({
      message: "error de sistema",
      detail: err.message,
    });
  }
};

async function createUser(parametros) {
  try {
    return await User.create(parametros);
  } catch (error) {
    throw { code: 500, message: "la base de datos rompio" };
  }
}
