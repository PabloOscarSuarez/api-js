require("dotenv").config();

module.exports = {
  development: {
    username: "materia",
    password: "materia",
    database: "materia",
    host: "localhost",
    dialect: "postgres",
    port: 5433,
  },
  production: {
    username: "lbgjgfca",
    password: "G8bzSCvbbGGtBkpzocj_ABeemmPezCE2",
    database: "lbgjgfca",
    host: "	abul.db.elephantsql.com",
    dialect: "postgres",
    port: 5433,
  },
};
