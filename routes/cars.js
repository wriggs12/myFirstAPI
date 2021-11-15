const express = require('express');
const router = express.Router();
const monggose = require('mongoose');
const cars = require('../models/cars');

const Car = require('../models/cars');

router.get('/', (req, res) => {
    Car.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });  
});

router.post('/', (req, res) => {
    const car = new Car({
        _id: new monggose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        year: req.body.year
    });

    car.save().catch(err => console.log(err));

    res.status(201).json({
        message: 'Handling POST request to /cars',
        createdCar: car
    })
});

module.exports = router;