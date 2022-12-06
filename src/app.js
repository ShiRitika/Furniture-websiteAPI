const express = require("express");
const cors = require("cors");
require("./db/connection");
const Sofa = require("./models/sofa");
const Table = require("./models/table");
const Chair = require("./models/chair");
const Bed = require("./models/bed");
const Lightning = require("./models/lightning");
const Decore = require("./models/decore");

const app =express(); 
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json());


app.post("/sofa", (req, res) => {
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
    Sofa.create(req.body).then((sofa) => {
        res.status(201).send(sofa);
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

app.post("/table", (req, res) => {
    const table = new Table(req.body);
    table.save().then((table) => {
        res.status(201);
        res.send(table);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.post("/chair", (req, res) => {
    Chair.create(req.body).then((data) => {
        res.status(201).send(data);
    }).catch((error) => {
        res.send(400).send(error);
    })
})

app.post("/bed", (req, res) => {
    const bed = new Bed(req.body);
    bed.save().then((bed) => {
        res.status(201);
        res.send(bed);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.post("/lightning", (req, res) => {
    const lightning = new Lightning(req.body);
    lightning.save().then((lightning) => {
        res.status(201);
        res.send(lightning);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.post("/decore", (req, res) => {
    const decore = new Decore(req.body);
    decore.save().then((decore) => {
        res.status(201);
        res.send(decore);
    }).catch((e) => {
        res.status(400).send(e);
    })
})


// get data from database
app.get("/sofa", async (req, res) => {
    try{
      const sofasData = await Sofa.find();
      res.send(sofasData);
    }catch(e){
        res.send(e);
    }
})

// get data from database
app.get("/table", async (req, res) => {
    try{
      const tablesData = await Table.find();
      res.send(tablesData);
    }catch(e){
        res.send(e);
    }
})
// get chair data from database
app.get("/chair", async (req, res) => {
    try{
      const chairsData = await Chair.find();
      res.send(chairsData);
    }catch(e){
        res.send(e);
    }
})
// get bed data from database
app.get("/bed", async (req, res) => {
    try{
      const bedsData = await Bed.find();
      res.send(bedsData);
    }catch(e){
        res.send(e);
    }
})
// get lightning data from database
app.get("/lightning", async (req, res) => {
    try{
      const lightningsData = await Lightning.find();
      res.send(lightningsData);
    }catch(e){
        res.send(e);
    }
})
// get decore data from database
app.get("/decore", async (req, res) => {
    try{
      const decoresData = await Decore.find();
      res.send(decoresData);
    }catch(e){
        res.send(e);
    }
})

app.listen(port, () => { 
    console.log(`connectin is setup at ${port}`);
})