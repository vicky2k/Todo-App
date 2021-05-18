const express = require('express');
const routes = require('./routes');
//const multer = require('multer');
//const bodyParser = require('body-parser'); // queryString or qs
const middleware = require('./middleware');
const mongoose = require('mongoose');
require('dotenv').config();
  const configs = require('./configs/configs');
  require("./models/sequelize");

const app = express();

middleware(app);
routes(app);

// Connect to database


//mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
//.then(res => console.log(`Awesome we are connected to our DB ${res}`))
//.catch(err => console.log(`Error in DB connection ${err}`));

// mongoose
//   .connect(configs.mongodbURl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log(`Awesome we are connected to our DB!`);
//   })
//   .catch((err) => {
//     console.log('oops fail to connect to db', err.message);
//   });

// Read about .env in node and the various way of loading it.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is lisening on port ${PORT}`);
});

// const mysql = require('mysql');

// const sql = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
// });

// sql.connect(function(err) {
//   if (err) throw err;
//   console.log("My SQL is Connected!");
// });