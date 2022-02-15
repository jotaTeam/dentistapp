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
      // medicalInfo.belongsTo(models.Emergency)
      medicalInfo.belongsTo(models.dental_emergency)

      // medicalInfo.hasOne(models.Causes);
       medicalInfo.hasOne(models.causes);

      // medicalInfo.hasOne(models.Simptoms);
      medicalInfo.hasOne(models.simptoms);
      
      medicalInfo.hasOne(models.Teeth)
      
    }
  };
  medicalInfo.init({//todo add description to allergy and pathology
    allergy:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    descriptionAllergy:{
      type:DataTypes.STRING,
      defaultValue: 'sin alergias previas'
    },
    pathology:{ //todo pathology
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    descriptionPathology:{
      type:DataTypes.STRING,
      defaultValue: 'sin alergias previas'
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