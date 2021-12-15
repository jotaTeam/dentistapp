'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dental_clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dental_clinic.init({
    name: {
      type:DataTypes.STRING
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'dental_clinic',
  });
  return dental_clinic;
};