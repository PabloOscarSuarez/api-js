const { User } = require("../../DAOS");

module.exports = async (req, res, next) => {
  try {
    const users = await User.findAllUsers();
    res.send({ code: 200, users });
  } catch (error) {
    res.status(500).send({ code: 500, message: error.message });
  }
};
