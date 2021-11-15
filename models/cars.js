const mongoose = require('mongoose');

const carSchema = mongoose.Schema( {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    year: Number
});

module.exports = mongoose.model('Car', carSchema);