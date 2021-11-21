//import debendencies
const mongoose = require('mongoose');

//Design what values a car will have
const carSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    year: Number
});

//export
module.exports = mongoose.model('Car', carSchema);