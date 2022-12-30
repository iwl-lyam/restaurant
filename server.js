const express = require('express');
const cors = require('cors')
const app = express();
const bodyparser = require("body-parser")
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
console.log(process.env)

app.use(cors());
app.use(bodyparser.json())


app.post('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.post('/order', (req, res) => {
    MongoClient.connect(process.env.URI, (err, db) => {
        console.log(err || "Connection success (/order)")

        db = db.db('orders');

        let cl = db.collection('orders')
        cl.insertOne(req.body);
        
    });
    res.status(200);
    res.send({})
})

app.listen(3030, () => console.log('API is running on http://localhost:3030/login'));