require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const PORT = process.env.PORT_SERV;
const typeSchema = require('./models/ModelSchema')
const router = require('./routes/router')

app.listen(PORT, ()=> console.log(`server running`));

//Conecção com o banco de dados
mongoose.connect(process.env.MONGO_URL)
    .catch(error => console.log(error.message))
    .finally(console.log("Bando de dados Conectado!"))

//Definindo o banco de dados qual o modelo apontando o Schema acima
const NewUser = mongoose.model('users', typeSchema)

const data = () =>{
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear();

    let fullDate = `${day}.${month}.${year}`

    return fullDate
}

//Criando os dados conforme o modelo
const new_user = new NewUser({
    id: Math.floor(Math.random()*100),
    user: "Thiago",
    age: 32,
    create: data()
})


app.use('/', router)

module.exports = {new_user}
// Hello