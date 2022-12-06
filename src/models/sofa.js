const mongoose = require("mongoose");


const sofaSchema = new mongoose.Schema({
    id: Number,
    image : String,
    description :String,
    price : Number,
    images : [
        {
            mainImg: String,
            img1: String,
            img2: String,
            img3: String,
            img4: String
        },
    ],
    sofaProducts : [
        {
            id: Number,
            name: String,
            category : String,
            availability: String,
            description: String
        },
    ],
});


const Sofa = new mongoose.model('Products',sofaSchema);

module.exports =  Sofa;