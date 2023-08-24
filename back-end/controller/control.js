const product = require("../models/product");
const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
const Product = require("../models/product")(sequelize, DataTypes);
const User = require("../models/puser")(sequelize, DataTypes);
const Order = require("../models/orders")(sequelize, DataTypes);
const OrderProducts = require("../models/order_products")(sequelize, DataTypes);

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {
        username: username,
        password: password,
      },
    });

    if (user) {
      res.json({ msg: "success", data: user });
    } else {
      res.status(403).json({ msg: "unsuccess", data: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req,res) => {
  try {
    const users= await User.findAll()

    res.json(users);
  }
  catch(error) { res.status(500).json({err : error.message})}
}

const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: User
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    const nameCategory = products.map((product) => {
      return {
        name: product.name,
        category: product.category,
      };
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const orderItem = async (req, res) => {
  try {
    const { product_id, quantity } = req.body;

    const orderProduct = await OrderProducts.create({
      order_id: null,
      product_id: product_id,
      quantity: quantity,
    });

    res.json({ msg: "success", data: orderProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createOrder = async (req, res) => {
  try {
    const { user_id, products, description, total_price, order_date, status } =
      req.body;

    const order = await Order.create({
      user_id: user_id,
      description: description,
      total_price: total_price,
      order_date: order_date,
      status: status,
    }).then((item) => {
      for (let i = 0; i < products.length; i++) {
        OrderProducts.create({
          orders_id: item.orders_id,
          product_id: products[i].id,
          quantity: products[i].quantity,
        });
      }
    });
    res.json({ msg: "success", data: order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    // Siparişi güncelle
    const updatedOrder = await Order.update(
      { status: status },
      { where: { orders_id: orderId } }
    );

    if (updatedOrder > 0) {
      // Sipariş durumu başarıyla güncellendi, stokları güncelle
      const orderProducts = await OrderProducts.findAll({
        where: { orders_id: orderId },
      });

      for (const orderProduct of orderProducts) {
        const product = await Product.findByPk(orderProduct.product_id);
        if (product) {
          product.stock -= orderProduct.quantity;
          await product.save();
          console.log(
            `Ürün (${product.name}) stok değeri güncellendi: ${product.stock}`
          );
        } else {
          console.log(`Ürün (${orderProduct.product_id}) bulunamadı.`);
        }
      }

      res.json({ msg: "Başarılı", data: updatedOrder });
    } else {
      res.status(404).json({ msg: "Order not found", data: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



Order.belongsTo(User, { foreignKey: "user_id" }); // Sipariş, bir kullanıcıya ait olur
User.hasMany(Order, { foreignKey: "user_id" }); // Bir kullanıcının birden fazla siparişi olabilir
Order.hasMany(OrderProducts, { foreignKey: "orders_id" }); // Bir siparişin birden fazla ürünü olabilir
OrderProducts.belongsTo(Order, { foreignKey: "orders_id" }); // Bir ürün bir siparişe ait olur
Product.hasMany(OrderProducts, { foreignKey: "product_id" }); // Bir ürünün birden fazla siparişi olabilir
OrderProducts.belongsTo(Product, { foreignKey: "product_id" }); // Bir sipariş ürünü bir ürüne ait olur

module.exports = {
  login,
  getProducts,
  getOrders,
  createOrder,
  updateOrderStatus,
  orderItem,
  getUser
};
