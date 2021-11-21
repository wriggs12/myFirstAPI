//import dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//find the correct port
const port  = process.env.PORT || 3000;

//Connect to DB
mongoose.connect(process.env.DATABASE_URL).then((result) => app.listen(port)).catch((err) => console.log(err));

//Middleware
app.use(express.json());

//import endpoints
const carsRoute = require('./routes/cars');
const countriesRoute = require('./routes/countries');

//use the endpoints
app.use('/cars', carsRoute);
app.use('/countries', countriesRoute);

//empty endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: "The two enpoints in this api are /cars and /countries. Both enpoints have get and post methods."
    });
});