var express = require("express");
var cors = require('cors')
const connection = require('./config/databaseconnection')
const path = require('path');
var authRoutes = require('./routes/authRoutes');
var bodyParser = require('body-parser');
var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connection.sequelize.sync();

app.use('/api',authRoutes);


app.listen(process.env.PORT || 5000);

