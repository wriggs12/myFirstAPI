const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const port  = process.env.PORT || 3000;

//Connect to DB
mongoose.connect('mongodb+srv://wriggs12:tnXnKw2fnYJ328gm@cars.tccrv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then((result) => app.listen(port)).catch((err) => console.log(err));

//Middleware
app.use(express.json());

const carsRoute = require('./routes/cars');
app.use('/cars', carsRoute);