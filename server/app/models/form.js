'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  form.init({
    date:{
      type:DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
    pain_zone:{
      type: DataTypes.STRING,
      defaultValue:'Sin dolor aparente'
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'form',
  });
  return form;
};