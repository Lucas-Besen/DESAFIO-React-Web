const Usuario = require('../models/usuario');
const status = require('http-status');
const bcrypt = require('bcrypt');


exports.cadastro = (req, res, next) => {
    const id = req.body.email;
    Usuario.findByPk(id)
    .then(usuario => {
        if (usuario) {
            res.send({
                mensagem:"Usuario ja cadastrado",
                ativo: false,
        });
        } else {
            const nome = req.body.nome;
            const telefone = req.body.telefone;
            bcrypt.hash(req.body.senha,10, (err, hash) =>{
                if(err){
                    return res.send({
                        mensagem: err,
                        ativo: false,
                    })
                }else{
                    Usuario.create({
                        id: id,
                        nome: nome,
                        senha: hash,
                        telefone: telefone,
                    })
                    res.send({
                        mensagem: 'Usuario Cadastrado',
                        ativo: true,
                });
                }
            })
        }
    })
    .catch(error => next(error));
   
}


