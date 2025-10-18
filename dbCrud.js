
// const express=require('express');
const mysql = require('mysql2');
// const bodyParser=require('body-parser');
// const app=express();
// const port=5000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// connecting to database 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'abdushekur',
    password: 'abdushekur',
    database: 'database'

});

db.connect(err => {
    if (err) {
        console.error('error connecting to database', err);
    }
    else {
        console.log('connected to dataase successfully');
    }
});

module.exports = db;