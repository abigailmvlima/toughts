const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
