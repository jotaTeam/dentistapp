'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicalInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  medicalInfo.init({
    allergy:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    surgery:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    pain_zone:{
      type: DataTypes.STRING,
      defaultValue:'Sin dolor aparente'
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'medicalInfo',
  });
  return medicalInfo;
};