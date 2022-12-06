const mongoose = require("mongoose");


const lightningSchema = new mongoose.Schema({
    id: Number,
    image : String,
    description :String,
    price : Number
});


const Lightning = new mongoose.model('Lightning', lightningSchema);

module.exports = Lightning;