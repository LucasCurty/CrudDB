require('dotenv').config()
const mysql = require('mysql');
const express = require('express')
const app = express()

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'banco.mwb'
});

connection.connect((err)=> {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });



app.listen(process.env.PORT, ()=> console.log('server running'))