"user strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        first_name: "admin",
        last_name: "admin",
        email: "admin@example.com",
        password:
          "$2a$10$01AXIEvhg8kyDuozB10uGeSxT46R.Zi9s5.H71EyYdiOMiJSE1sEi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "admin1",
        last_name: "admin1",
        email: "admin1@example.com",
        password:
          "$2a$10$01AXIEvhg8kyDuozB10uGeSxT46R.Zi9s5.H71EyYdiOMiJSE1sEi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "admin2",
        last_name: "admin2",
        email: "admin2@example.com",
        password:
          "$2a$10$01AXIEvhg8kyDuozB10uGeSxT46R.Zi9s5.H71EyYdiOMiJSE1sEi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    //nada
  },
};
