const mongoose = require('mongoose')

//Schema - Definindo os tipos e dados.
const typeSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    user: {type:String, required: true},
    age: {type: Number, required: true},
    create: String
})

module.exports = typeSchema;