require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = {
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
  },
  development: {
    username: "pablito",
    password: "",
    database: "postgres",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
