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
                if(usuario.verificado){
                    const senha = req.body.senha;
                    bcrypt.compare(senha, usuario.senha, (err, result) => {
                        if (err) {
                            res.send({  
                                mensagem: "Login ou Senha inválidos", 
                            });
                        }
                        if (result) {
                            const token = jwt.sign({
                                email: usuario.id
                            },env.authSecret,{
                                expiresIn:"10m"
                            })
                            res.send({ 
                                mensagem: 'logado',
                                token: token
                            });
                        } else {
                            res.send({ 
                                mensagem: "Login ou Senha inválidos", 
                        });
                        }
                    })
                }
                else{
                    res.send({ 
                        mensagem: "Login ou Senha inválidos", 
                    });
                }
            } else {
                res.send({ mensagem: "Login ou Senha inválidos",
             });
            }
        })
        .catch(error => next(error));
}


