//import dependencies
const express = require('express');
const router = express.Router();
const monggose = require('mongoose');
const countries = require('../models/countries');

//import country object
const Countries = require('../models/countries');

// the /countries get endpoint
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

//the /countries post endpoint
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

//export
module.exports = router;