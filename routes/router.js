const express = require('express');
const router = express.Router()

const controllers = require('../controllers/controlers')
const typeSchema = require('../models/ModelSchema')

//rota principal onde renderiza o ejs
router.get('/', (req,res)=>res.render("front"))

// rotas para disparar os controladores com suas funcoes
router.get('/list', controllers.findAllUser)
router.get('/:findOne', controllers.findOneUser)
router.delete('/:id', controllers.deleteUser)
router.post('/save', express.urlencoded({extended: true}), controllers.saveUser)

module.exports = router;