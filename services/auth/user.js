const { User } = require("../../db/models");

async function createUser(parametros) {
    try {
      return await User.create(parametros);
    } catch (error) {
      console.log(error)
      throw { code: 500, message: "la base de datos rompio" };
    }
  }
  
  module.exports = { createUser }