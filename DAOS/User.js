const { User } = require("../db/models");

async function getUserById(id) {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      const error = new Error("user not found");
      error.code = 400;
      throw error;
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function findAllUsers() {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserById,
  findAllUsers,
};
