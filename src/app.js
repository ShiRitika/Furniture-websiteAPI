const express = require("express");
const cors = require("cors");
require("./db/connection");
const  Products = require("./models/product");

const app =express(); 
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json());


app.post("/product", (req, res) => {
    // console.log(req.body);
    // const product = new Products(req.body);
    // product.save().then((product) => {
    //     res.status(201);
    //     res.send(product);
    // }).catch((e) => {
    //     res.status(400).send(e);
    // })
    // res.send("hello i m here");

    //send single data at a time
    Products.create(req.body).then((product) => {
        res.status(201).send(product);
    }).catch((error) => {
        res.send(400).send(error);
    })

    // //send multiple data at a time
    // Products.insertMany(req.body).then((product) => {
    //     res.status(201).send(product);
    // }).catch((error) => {
    //     res.send(400).send(error);
    // })
})


//get data from database
app.get("/product", async (req, res) => {

    try{
      const productsData = await Products.find();
      res.send(productsData);
    }catch(e){
        res.send(e);
    }
})
 
app.listen(port, () => { 
    console.log(`connectin is setup at ${port}`);
})