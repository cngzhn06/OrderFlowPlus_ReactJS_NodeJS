const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./sequelize");
const {
  login,
  getProducts,
  getOrders,
  createOrder,
  updateOrderStatus,
  orderItem,
  getUser,
  userUpdate,
  createUser,
} = require("./controller/control");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

app.post("/login", login);
app.get("/products", getProducts);
app.get("/orderList", getOrders);
app.post("/create-order", createOrder);
app.put('/updateOrderStatus/:orderId', updateOrderStatus);
app.post('/orderItem', orderItem);
app.get('/getUsers', getUser);
app.put('/updateUserData/:userId', userUpdate)
app.post('/create-user',createUser),


sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Port çalışıyor np ${port}`);
  });
});
