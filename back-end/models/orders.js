const Sequelize = require('sequelize');
const User = require('./puser')
module.exports = function(sequelize, DataTypes) {

  
  return sequelize.define('orders', {
    orders_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'puser_id'
      }
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 onaylanmadı \/ 1 onaylandı"
    }
  }, {
    sequelize,
    modelName: 'Orders',
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orders_id" },
        ]
      },
      {
        name: "user",
        using: "BTREE",
        fields: [
          { name: "puser_id" },
        ]
      },
    ]
  })
  Orders.associate = (models) => {
    Orders.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
    Orders.belongsToMany(models.Product, {
      through: models.OrderProducts,
      foreignKey: 'order_id'
    });
  };
};
