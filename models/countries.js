//import debendencies
const mongoose = require('mongoose');

//Design what values a country will have
const countrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    population: Number,
    gdp: Number
});

//export
module.exports = mongoose.model('Country', countrySchema);