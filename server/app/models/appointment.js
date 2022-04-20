'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  appointment.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,

    },
    surname:  {
      allowNull: false,
      type: DataTypes.STRING,
      
    },
    dni: {
      allowNull: false,
      type: DataTypes.STRING,
      
    },
    phone:  {
      allowNull: false,
      type: DataTypes.STRING,
      
    },
    dental_cleaning: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    curettage: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    Teeth_Whitening: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    medical_check: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    orthodontics_check: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    fluoridation: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    pit_and_fissure_sealing: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    obturation: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    endodontics: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    simple_extraction: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    implants: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    check_implants: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    prosthesis: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    check_prosthesis: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    botox: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
  }, {
    sequelize,
    modelName: 'appointment',
  });
  return appointment;
};