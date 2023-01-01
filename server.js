const express = require('express');
const crypto = require('crypto'); 
const cors = require('cors')
const app = express();
const bodyparser = require("body-parser")
const MongoClient = require('mongodb').MongoClient;
const {uid} = require('uid/secure')
const {WebSocketServer} = require("ws")
require('dotenv').config()

app.use(cors());
app.use(bodyparser.json())


app.post('/login', (req, res) => {
    MongoClient.connect(process.env.URI, async (err, db) => {
        if (err) throw err

        db = db.db('orders');

        let cl = db.collection('login')
        let dbcreds = await cl.findOne({user: req.body.username});
        console.log(dbcreds)
        if (dbcreds === null) { 
            return res.status(400).send({ 
                message : "User not found."
            }); 
        } 
        let hash = crypto.pbkdf2Sync(req.body.password, dbcreds.salt, 1000, 64, `sha512`).toString(`hex`); 
        if (hash !== dbcreds.pass) {
            return res.status(400).send({
                message: "Wrong password."
            })
        }

        return res.status(200).send({
            token: dbcreds.token
        })
    });
});

app.post('/signup', (req, res) => {
    let salt = crypto.randomBytes(16).toString('hex');
    let hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, `sha512`).toString(`hex`);
    let token = uid(20)
    MongoClient.connect(process.env.URI, (err, db) => {
        if (err) throw err

        db = db.db('orders');

        let cl = db.collection('login')
        
        cl.insertOne({user: req.body.username, pass: hash, token: token, salt: salt});
        
    });
    res.status(200)
    res.send({token: token})
})

app.post('/order', (req, res) => {
    MongoClient.connect(process.env.URI, (err, db) => {
        if (err) throw err

        db = db.db('orders');

        let cl = db.collection('orders')
        cl.insertOne(req.body);
        
    });
    res.status(200);
    res.send({})
})

app.listen(3030, () => console.log('API is running on http://localhost:3030/login'));

const wss = new WebSocketServer({ port: 3031 });

wss.on('connection', function connection(ws) {
    setInterval(() => {
        MongoClient.connect(process.env.URI, async (err, db) => {
            if (err) throw err
    
            db = db.db('orders');
    
            let cl = db.collection('orders')
            ws.send(cl.find())
        }, 30000)
    })
});