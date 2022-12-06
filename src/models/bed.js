const mongoose = require("mongoose");


const bedSchema = new mongoose.Schema({
    id: Number,
    image : String,
    description :String,
    price : Number
});


const Bed = new mongoose.model('Bed', bedSchema);

module.exports = Bed;