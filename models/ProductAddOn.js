module.exports = function (sequelize, DataTypes) {
  const ProductAddOn = sequelize.define("ProductAddOn");

  ProductAddOn.associate = function (models) {
    ProductAddOn.belongsTo(models.Extra, {
      foreignKey: {
        allowNull: false
      }
    });
    ProductAddOn.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return ProductAddOn;
};