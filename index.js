require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const path = require('path')
const router = require('./routes/router')

//iniciando o servidor
const PORT = process.env.PORT_SERV;
app.listen(PORT, ()=> console.log(`server running`));

//Conecção com o banco de dados
mongoose.connect(process.env.MONGO_URL)
    .catch(error => console.log(error.message))
    .finally(console.log("Bando de dados Conectado!"))

//Definindo o ejs e passando o arquivo das rotas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./client/"));
app.use('/', router);