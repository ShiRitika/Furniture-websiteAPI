const mongoose = require("mongoose");


const tableSchema = new mongoose.Schema({
    id: Number,
    image : String,
    description :String,
    price : Number
});


const Table = new mongoose.model('Table', tableSchema);

module.exports = Table;