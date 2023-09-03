const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const port = 3000;

const appRoute = require('./routes/appRoute');
const userRoute = require('./routes/userRoute');
const shopRoute = require('./routes/shopRoute');
const productRoute = require('./routes/productRoute');
const categoryRoute = require('./routes/categoryRoute');
const warehouseRoute = require('./routes/warehouseRoute');
const warehouse = require('./routes/warehouseRoute');
const db = require('./models');
const app = express();

const fs = require('fs');
const { default: mongoose } = require('mongoose');

const mongodb_uri = 'mongodb://127.0.0.1:27017';
const dbName = '/group_asm2';
const connectString = mongodb_uri + dbName;

mongoose.connect(connectString);

const mongodb = mongoose.connection;

mongodb.on('error', (error) => console.log(error));
mongodb.once('open', () => console.log('Connected to Database'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middle ware below may not be needed
// app.use(express.static(path.join(__dirname, 'views')));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', appRoute);
app.use('/user', userRoute);
app.use('/shop', shopRoute);
app.use('/product', productRoute);
app.use('/warehouse', warehouse);
db.sequelize.sync().then((req) => {
  const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    const io = require('./socket').init(server);
    io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('post item', (item) => {
        console.log(item);
        io.emit('post item', item);
      });
    });
  });
});
