'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class causes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      causes.hasOne(models.MedicalInfo)
    }
  };
  causes.init({
    cavity: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    fracture: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    gums_problems: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    oral_hygiene: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    oral_disease: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    other: DataTypes.STRING
  }, {
    timestamps:false,
    sequelize,
    modelName: 'causes',
  });
  return causes;
};