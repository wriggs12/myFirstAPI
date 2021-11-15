const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const port  = process.env.PORT || 3000;

//Connect to DB
mongoose.connect(process.env.DB_Connection).then((result) => app.listen(port)).catch((err) => console.log(err));

//Middleware
app.use(express.json());

const carsRoute = require('./routes/cars');
app.use('/cars', carsRoute);