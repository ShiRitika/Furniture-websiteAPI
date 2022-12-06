const mongoose = require("mongoose");


const decoreSchema = new mongoose.Schema({
    id: Number,
    image : String,
    description :String,
    price : Number
});


const Decore = new mongoose.model('Decore', decoreSchema);

module.exports = Decore;