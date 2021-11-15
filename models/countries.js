const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    population: Number,
    gdp: Number
});

module.exports = mongoose.model('Country', countrySchema);