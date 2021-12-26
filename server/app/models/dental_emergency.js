'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dental_emergency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     dental_emergency.hasOne(models.medicalInfo)
     
    }
  };
  dental_emergency.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlpha:true,
        len:[2-20],
      }
    },
    surnames: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlpha:true,
        len:[2-50],
      }
    },
    phone: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        isNumeric:true,
        len:9,
      }
    },
    
  }, {
    sequelize,
    timestamps:false,
    modelName: 'dental_emergency',
  });
  return dental_emergency;
};