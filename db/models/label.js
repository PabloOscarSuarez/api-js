'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Label.belongsToMany(models.Task, {
        as: 'tasks',
        through: 'TaskLabel',
        foreignKey:'labelId',
        otherKey: 'taskId',
        timestamps: false,
      })
    }
  }
  Label.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Label',
  });
  return Label;
};