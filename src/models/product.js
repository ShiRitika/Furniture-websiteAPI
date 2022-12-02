const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    id: Number,
    image : String,
    description :String,
    price : Number
});


const Products = new mongoose.model('Products',productSchema);

module.exports =  Products;