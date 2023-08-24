const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imgdir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });

  Product.associate = (models) => {
    Product.belongsToMany(models.Orders, {
      through: models.OrderProducts,
      foreignKey: 'product_id'
    });
  };

  return Product;
};
