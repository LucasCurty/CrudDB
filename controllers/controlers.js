const mongoose = require('mongoose');
const typeSchema = require('../models/ModelSchema')
const NewUser = mongoose.model('users', typeSchema)

//funcao / controlador para listar os itens cadastrados
const findAllUser = async (req,res) =>{
   await NewUser.find()
        .then(item => {res.status(200).send(item)})
        .catch(error => console.log(error))
}
// funcao / controlador para buscar pelo nome do usuario
const findOneUser = (req,res) => {
    let name = req.params.findOne;
    NewUser.findOne({user:name})
        .then((item) => {res.status(200).send("<p>Encontrado!</p>" + item);})
        .catch(error => console.log(error))
}
// funcao / controlador para deletar um item ou usuario
const deleteUser = (req,res) => {
    let del = req.params.id;
    NewUser.deleteOne({id:del})
        .then(res.send(`Apagado com sucesso!`)) 
        .catch(error => console.log(error.message))
}
// funcao / controlador para salvar os dados vindos do front(EJS)
const saveUser = (req,res) =>{
    let use = new NewUser(req.body)
   use.save()
    .then(res.redirect('/list'))
    .catch(error => console.log(error))
}

module.exports = {findAllUser, findOneUser, deleteUser, saveUser}