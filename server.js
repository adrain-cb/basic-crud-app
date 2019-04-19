const express = require('express');
const MongoClient = require('mongodb');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(db.url, (err, database) => {
    if(err) return console.log(err);
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log("We are live on port " + port);
    })
})