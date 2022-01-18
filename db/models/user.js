"use strict";

const { user } = require("pg/lib/defaults");
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task, {
        as: 'tasks',
        foreignKey: 'userId',
      })
    }
  }

  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
    }
  );

  // hook
  User.beforeCreate(cambiosDeContraseña);
  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };
  
  User.prototype.verifyPassword = function (userPassword) {
    var { password } = Object.assign({}, this.get());
    console.log(password, userPassword)
    
    return bcrypt.compareSync(userPassword, password);
  };


  return User;
};

function cambiosDeContraseña(user) {
  if (user.changed("password")) {
    user.password = encriptarContrasaña(user.get("password"));
  }
}

function encriptarContrasaña(contraseña) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(contraseña, salt);
}
