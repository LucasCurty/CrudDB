const express = require('express');
const path = require('path')
const router = express.Router()
const app = express();

const controllers = require('../controllers/controlers')
const typeSchema = require('../models/ModelSchema')


app.set("views", path.join(__dirname, "client"));
app.set("view engine", "ejs");


router.get('/', (req,res)=>{
    res.render("front", (err)=>{ err ? console.log(err) : console.log("OK!")});
})

router.get('/list', controllers.findAllUser)
router.get('/:findOne', controllers.findOneUser)
router.delete('/:id', controllers.deleteUser)
router.post('/save', controllers.saveUser)

module.exports = router;