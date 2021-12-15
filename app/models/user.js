'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[2,20]
      }
    },
    password: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:true,
      }
    },
    google_token:DataTypes.STRING,

  }, {
    sequelize,
    timestamps:false,
    modelName: 'User',
  });
  return User;
};