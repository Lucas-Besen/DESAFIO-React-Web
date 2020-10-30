const restful = require('node-restful')
const mongoose = restful.mongoose

const cadastro = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, min: 11, required: true },
    email:{type: String,min:5, required: true},
    senha:{type:String, min:8, required: true}
})

module.exports = restful.model('Cadastro', cadastro)