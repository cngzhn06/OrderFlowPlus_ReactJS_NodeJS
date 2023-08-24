var DataTypes = require("sequelize").DataTypes;
var _orders = require("./orders");
var _product = require("./product");
var _puser = require("./puser");

function initModels(sequelize) {
  var orders = _orders(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var puser = _puser(sequelize, DataTypes);

  orders.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(orders, { as: "orders", foreignKey: "product_id"});
  orders.belongsTo(puser, { as: "user", foreignKey: "user_id"});
  puser.hasMany(orders, { as: "orders", foreignKey: "user_id"});

  return {
    orders,
    product,
    puser,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
