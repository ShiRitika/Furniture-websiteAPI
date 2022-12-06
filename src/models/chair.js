const mongoose = require("mongoose");


const chairSchema = new mongoose.Schema({
    id: Number,
    image : String,
    description :String,
    price : Number
});


const Chair = new mongoose.model('Chair', chairSchema);

module.exports = Chair;