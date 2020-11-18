const Usuario = require('../models/usuario');
const status = require('http-status');
const jwt = require('jsonwebtoken');
const env = require('../../src/.env') 

exports.dados = (req, res, next) => {
    const id = req.token.email;

    Usuario.findByPk(id)
        .then(usuario => {
            if (usuario) {
                 const token = jwt.sign({
                    email: usuario.id
                },env.authSecret,{
                    expiresIn:"10m"
                }) 
                res.send({
                    mensagem: "Dados encontrados",
                    nome: usuario.nome,
                    telefone: usuario.telefone,
                    email:usuario.id,
                    token: token 
                });
            }else {
                res.send({
                    mensagem: "Dados não encontrados"
                });
            }
        })
        .catch(error => next(error));
}