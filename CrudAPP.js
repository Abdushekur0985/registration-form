// Description: This module provides CRUD operations for the application database.


const express = require('express');
const db = require('./dbCrud');  // make sure you have db.js with mysql connection
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.post('/mytable', (req, res) => {
    const { firstname, lastname, city, email, password } = req.body;

    const sql = "INSERT INTO mytable (firstname, lastname, city, email, password) VALUES (?,?,?,?,?)";

    db.query(sql, [firstname, lastname, city, email, password], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Data inserted successfully', studentId: result.insertId });
    });
});

app.get('/mytable',(req,res)=>{
    const sql="SELECT * FROM mytable";
    db.query(sql,(err,result)=>{
        if(err) return res.status(500).json({error:err.message});
        res.json(result);

    })
});
// delete data from database

app.delete('/mytable', (req, res) => {
    const sql = "DELETE FROM mytable"; // delete ALL rows
console.log("Delete request received");
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

              console.log(result);
        res.json({

            message: "All data deleted successfully",
            affectedRows: result.affectedRows  // shows how many rows were deleted
        });
    });
});


// app.put('/mytable/:id',(req,res)=>{
//     const {id}=req.params;
//     const{firstname,lastname,city,email,password}=req.body;
//     const sql="UPDATE mytable SET firstname=?,lastname=?,city=?,eamil=?,password=? WHERE id=?";
//     db.query(sql,[firstname,lastname,city,email,password,id],(err,result)=>{
//         if(err) return  res.status(500).json({error:err.message});
//         res.json({message:"Data updated successfully"});
//     })
// })
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
