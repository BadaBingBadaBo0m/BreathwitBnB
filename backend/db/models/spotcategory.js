'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpotCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log("ASSOCIATE")
      SpotCategory.belongsTo(models.Category, {
        foreignKey: 'categoryId'
      });

      SpotCategory.belongsTo(models.Spot, {
        foreignKey: 'spotId'
      });
    }
  }
  SpotCategory.init({
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SpotCategory',
  });
  return SpotCategory;
};
