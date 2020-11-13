const Usuario = require('../models/usuario');
const status = require('http-status');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('../../src/.env') 

exports.login = (req, res, next) => {

    const id = req.body.email
    Usuario.findByPk(id)
        .then(usuario => {
            if (usuario) {
                const senha = req.body.senha;
                bcrypt.compare(senha, usuario.senha, (err, result) => {
                    if (err) {
                        res.send({  
                            mensagem: "Login ou Senha inválidos", 
                            ativo: usuario.ativo,
                        });
                    }
                    if (result) {
                        usuario.update({
                            ativo:true 
                        },{
                            where: {id:id}
                        })
                        const token = jwt.sign({
                            email: usuario.id,
                            nome: usuario.nome,
                        },env.authSecret,{
                            expiresIn:"1h"
                        })
                        res.send({ 
                            mensagem: 'logado',
                            ativo: usuario.ativo, 
                            nome: usuario.nome,
                            email: usuario.id,
                            telefone: usuario.telefone,
                            token: token
                        });
                    } else {
                        res.send({ 
                            mensagem: "Login ou Senha inválidos", 
                            ativo: usuario.ativo,
                    });
                    }
                })
            } else {
                res.send({ mensagem: "Login ou Senha inválidos",
                ativo: false,
             });
            }
        })
        .catch(error => next(error));
}


