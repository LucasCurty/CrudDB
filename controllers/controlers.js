const mongoose = require('mongoose');
const typeSchema = require('../models/ModelSchema')
const NewUser = mongoose.model('users', typeSchema)


const findAllUser = async (req,res) =>{
   await NewUser.find()
        .then(item => {res.status(200).send(item)})
        .catch(error => console.log(error))
}

const findOneUser = (req,res) => {

    let name = req.params.findOne;
    NewUser.findOne({user:name})
        .then((item) => {res.status(200).send("<p>Encontrado!</p>" + item);})
        .catch(error => console.log(error))
}

const deleteUser = (req,res) => {
    let del = req.params.id;
    
    NewUser.deleteOne({id:del})
        .then(res.send(`Apagado com sucesso!`)) 
        .catch(error => console.log(error.message))
}
const saveUser = (req,res) =>{
    let use = new NewUser(req.body)
   use.save()
    .then(res.redirect('/list'))
    .catch(error => console.log(error))
}


module.exports = {findAllUser, findOneUser, deleteUser, saveUser}