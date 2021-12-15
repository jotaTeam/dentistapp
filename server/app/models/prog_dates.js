'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prog_dates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  prog_dates.init({
    date: DataTypes.DATE
  }, {
    timestamps:false,
    sequelize,
    modelName: 'prog_dates',
  });
  return prog_dates;
};