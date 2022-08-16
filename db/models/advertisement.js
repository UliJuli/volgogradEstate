'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'id' });
    }
  }
  Advertisement.init({
    category: DataTypes.INTEGER,
    title: DataTypes.STRING,
    addressString: DataTypes.STRING,
    addressCoords: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    square: DataTypes.INTEGER,
    roomCount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};
