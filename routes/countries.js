const express = require('express');
const router = express.Router();
const monggose = require('mongoose');
const countries = require('../models/countries');

const Countries = require('../models/countries');

router.get('/', (req, res) => {
    Countries.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req, res) => {
    const country = new Countries({
        _id: new monggose.Types.ObjectId(),
        name: req.body.name,
        population: req.body.population,
        gdp: req.body.gdp
    });

    country.save().catch(err => console.log(err));

    res.status(200).json({
        message: 'Handling POST request to /countries',
        createdCountry: country
    });
});

module.exports = router;