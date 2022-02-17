'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class simptoms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      simptoms.belongsTo(models.medicalInfo)
    }
  };
  simptoms.init({
    bleeding: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    pain: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    dental_movility: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    ulcer: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    dental_stains: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    gums_inflammations: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    bad_breath: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    sensibility: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    otherSimptoms: { 
      type:DataTypes.STRING,
      defaultValue:'Nada que destacar'
    },
  }, {
    timestamps:false,
    sequelize,
    modelName: 'simptoms',
  });
  return simptoms;
};