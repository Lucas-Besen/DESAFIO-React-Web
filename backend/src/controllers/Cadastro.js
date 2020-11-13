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
                estado: false,
        });
        } else {
            const nome = req.body.nome;
            const telefone = req.body.telefone;
            const ativo = req.body.ativo;
            bcrypt.hash(req.body.senha,10, (err, hash) =>{
                if(err){
                    return res.send({
                        mensagem: err,
                        estado: false,
                    })
                }else{
                    Usuario.create({
                        id: id,
                        nome: nome,
                        senha: hash,
                        telefone: telefone,
                        ativo: ativo
                    })
                    res.send({
                        mensagem: 'Usuario Cadastrado',
                        estado: true,
                });
                }
            })
        }
    })
    .catch(error => next(error));
   
}


